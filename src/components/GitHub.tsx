import { useState } from "react";
import githubData from "../lib/github-contributions.json";
import { site } from "../lib/content";
import { Reveal } from "./Reveal";

type Day = { date: string; count: number; level: number };
type YearMap = Record<string, { total: number; days: Day[] }>;
type Tip = { x: number; y: number; label: string } | null;

const byYear = githubData.byYear as YearMap;
const years = githubData.years;
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const LEVELS = [0, 1, 2, 3, 4];

function toIso(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function formatDay(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

export function GitHub() {
  const [year, setYear] = useState(
    years[years.length - 1] ?? new Date().getFullYear()
  );
  const [tip, setTip] = useState<Tip>(null);

  const data = byYear[String(year)] ?? { total: 0, days: [] };
  const dayMap = new Map(data.days.map((day) => [day.date, day]));

  const jan1 = new Date(year, 0, 1);
  const firstSunday = new Date(jan1);
  firstSunday.setDate(jan1.getDate() - jan1.getDay());

  const weeks: Date[] = [];
  const cursor = new Date(firstSunday);
  const lastDay = new Date(year, 11, 31);
  while (cursor <= lastDay) {
    weeks.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 7);
  }

  return (
    <section id="github" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">05 / GitHub</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="gh-header">
            <p className="gh-total">{data.total.toLocaleString()}</p>
            <p className="gh-total-label">contributions in {year}</p>
            <a
              className="gh-profile"
              href={site.github.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/{site.github.user}
            </a>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <ul className="gh-years">
            {years.map((y) => (
              <li key={y}>
                <button
                  type="button"
                  className={
                    y === year ? "gh-year gh-year--active" : "gh-year"
                  }
                  onClick={() => setYear(y)}
                >
                  {y}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200}>
          <div className="gh-grid-scroll">
            <div className="gh-grid">
              <div className="gh-weekdays" aria-hidden="true">
                {WEEKDAYS.map((label) => (
                  <span key={label} className="gh-weekday">
                    {label}
                  </span>
                ))}
              </div>
              <div
                className="gh-grid-inner"
                role="img"
                aria-label={`${data.total} contributions in ${year}`}
                onMouseLeave={() => setTip(null)}
              >
                {weeks.map((weekStart, weekIndex) =>
                  WEEKDAYS.map((_, dayIndex) => {
                    const date = new Date(weekStart);
                    date.setDate(weekStart.getDate() + dayIndex);
                    const iso = toIso(date);
                    if (date.getFullYear() !== year) {
                      return <span key={iso} className="gh-day gh-day--blank" />;
                    }
                    const day = dayMap.get(iso);
                    const count = day?.count ?? 0;
                    const level = day ? Math.min(day.level, 4) : 0;
                    const label =
                      count > 0
                        ? `${count} contribution${count === 1 ? "" : "s"} · ${formatDay(iso)}`
                        : `No contributions · ${formatDay(iso)}`;
                    return (
                      <span
                        key={`${weekIndex}-${iso}`}
                        className={`gh-day gh-day--${level}`}
                        aria-label={label}
                        onMouseEnter={(event) => {
                          const rect =
                            event.currentTarget.getBoundingClientRect();
                          const x = Math.min(
                            Math.max(rect.left + rect.width / 2, 90),
                            window.innerWidth - 90
                          );
                          const y = Math.max(rect.top, 40);
                          setTip({ x, y, label });
                        }}
                        onMouseLeave={() => setTip(null)}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={250}>
          <div className="gh-legend" aria-hidden="true">
            <span>Less</span>
            {LEVELS.map((level) => (
              <span key={level} className={`gh-day gh-day--${level}`} />
            ))}
            <span>More</span>
          </div>
        </Reveal>
      </div>
      {tip && (
        <div className="gh-tip" style={{ left: tip.x, top: tip.y }}>
          {tip.label}
        </div>
      )}
    </section>
  );
}