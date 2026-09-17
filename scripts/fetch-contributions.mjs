import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const USER = "majeranoL";
const MIN_YEAR = 2024;

const OUTPUT = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "lib",
  "github-contributions.json"
);

const CURRENT_YEAR = new Date().getFullYear();

function parseCells(html) {
  const tooltipCounts = new Map();
  const tipRe = /<tool-tip[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g;
  let tip;
  while ((tip = tipRe.exec(html))) {
    const id = tip[1];
    const text = tip[2];
    const match = /(\d+)\s+contribution/.exec(text);
    tooltipCounts.set(id, match ? Number(match[1]) : 0);
  }

  const days = [];
  const cellRe = /<td[^>]*\bclass="ContributionCalendar-day"[^>]*>/g;
  let cell;
  while ((cell = cellRe.exec(html))) {
    const attrs = cell[0];
    const date = /data-date="(\d{4}-\d{2}-\d{2})"/.exec(attrs);
    const id = /\bid="([^"]+)"/.exec(attrs);
    const level = /data-level="([0-4])"/.exec(attrs);
    if (!date || !id || !level) continue;
    days.push({
      date: date[1],
      count: tooltipCounts.get(id[1]) ?? 0,
      level: Number(level[1]),
    });
  }
  return days;
}

async function fetchYear(year) {
  const url = `https://github.com/users/${USER}/contributions?from=${year}-01-01&to=${year}-12-31`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; contributions-snapshot)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${year}`);
  const html = await res.text();

  const days = parseCells(html);
  const total = days.reduce((sum, day) => sum + day.count, 0);
  return { year, total, days: days.filter((day) => day.count > 0) };
}

const byYear = {};
const years = [];

for (let year = CURRENT_YEAR; year >= MIN_YEAR; year -= 1) {
  try {
    const data = await fetchYear(year);
    if (data.total > 0) {
      byYear[String(year)] = { total: data.total, days: data.days };
      years.push(year);
    } else {
      console.log(`skip ${year}: no contributions`);
    }
  } catch (error) {
    console.error(`skip ${year}: ${error.message}`);
  }
}

years.sort();

const snapshot = {
  user: USER,
  generatedAt: new Date().toISOString(),
  years,
  byYear,
};

writeFileSync(OUTPUT, JSON.stringify(snapshot, null, 2) + "\n");
const rows = years.map((year) => `${year}: ${byYear[String(year)].total}`).join(", ");
console.log(`wrote ${OUTPUT}\n${rows}`);