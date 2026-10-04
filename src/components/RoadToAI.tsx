import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";

type Skill = {
  id: string;
  label: string;
};

type Category = {
  title: string;
  skills: Skill[];
};

const roadmap: Category[] = [
  {
    title: "Mathematics & Statistics",
    skills: [
      { id: "math-linear-algebra", label: "Linear Algebra (vectors, matrices, eigenvalues)" },
      { id: "math-calculus", label: "Calculus & Multivariate Calculus" },
      { id: "math-prob-stats", label: "Probability & Statistics" },
      { id: "math-info-theory", label: "Information Theory (entropy, KL divergence)" },
      { id: "math-optimization", label: "Optimization (gradient descent variants)" },
    ],
  },
  {
    title: "Python for AI",
    skills: [
      { id: "py-core", label: "Python Core (OOP, comprehensions, generators)" },
      { id: "py-numpy", label: "NumPy — numerical computing" },
      { id: "py-pandas", label: "Pandas — data manipulation & analysis" },
      { id: "py-matplotlib", label: "Matplotlib / Seaborn — data visualization" },
      { id: "py-scikit", label: "Scikit-learn — classical ML algorithms" },
    ],
  },
  {
    title: "Machine Learning Fundamentals",
    skills: [
      { id: "ml-supervised", label: "Supervised Learning (regression, classification)" },
      { id: "ml-unsupervised", label: "Unsupervised Learning (clustering, PCA)" },
      { id: "ml-eval", label: "Model Evaluation (cross-validation, metrics)" },
      { id: "ml-feature", label: "Feature Engineering & Selection" },
      { id: "ml-regularization", label: "Regularization & Overfitting Prevention" },
      { id: "ml-ensemble", label: "Ensemble Methods (Random Forest, Gradient Boosting)" },
    ],
  },
  {
    title: "Deep Learning",
    skills: [
      { id: "dl-nn", label: "Neural Networks & Backpropagation" },
      { id: "dl-cnn", label: "Convolutional Neural Networks (CNNs)" },
      { id: "dl-rnn", label: "Recurrent Neural Networks (RNNs / LSTMs)" },
      { id: "dl-attention", label: "Attention Mechanism & Transformers" },
      { id: "dl-pytorch", label: "PyTorch — model building & training" },
      { id: "dl-tf", label: "TensorFlow / Keras" },
      { id: "dl-gpu", label: "GPU Programming & CUDA fundamentals" },
    ],
  },
  {
    title: "Natural Language Processing",
    skills: [
      { id: "nlp-text", label: "Text Preprocessing (tokenization, embeddings)" },
      { id: "nlp-word2vec", label: "Word Embeddings (Word2Vec, GloVe)" },
      { id: "nlp-bert", label: "BERT & Pre-trained Language Models" },
      { id: "nlp-llm", label: "Large Language Models (GPT, LLaMA family)" },
      { id: "nlp-rag", label: "Retrieval-Augmented Generation (RAG)" },
      { id: "nlp-finetune", label: "Fine-tuning & Prompt Engineering" },
    ],
  },
  {
    title: "Computer Vision",
    skills: [
      { id: "cv-basics", label: "Image Processing Fundamentals (OpenCV)" },
      { id: "cv-detection", label: "Object Detection (YOLO, Faster R-CNN)" },
      { id: "cv-segmentation", label: "Image Segmentation" },
      { id: "cv-generative", label: "Generative Models (GANs, Diffusion)" },
      { id: "cv-multimodal", label: "Multimodal Models (CLIP, Vision-Language)" },
    ],
  },
  {
    title: "MLOps & Engineering",
    skills: [
      { id: "mlops-experiment", label: "Experiment Tracking (MLflow, Weights & Biases)" },
      { id: "mlops-docker", label: "Docker & Containerization" },
      { id: "mlops-pipeline", label: "Data & Training Pipelines" },
      { id: "mlops-serve", label: "Model Serving (FastAPI, TorchServe, vLLM)" },
      { id: "mlops-cloud", label: "Cloud ML Platforms (AWS SageMaker, GCP Vertex AI)" },
      { id: "mlops-monitor", label: "Model Monitoring & Data Drift Detection" },
      { id: "mlops-cicd", label: "CI/CD for ML Workflows" },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { id: "de-sql", label: "Advanced SQL & Query Optimization" },
      { id: "de-pipeline", label: "ETL / ELT Pipeline Design" },
      { id: "de-bigdata", label: "Big Data Tools (Spark, Dask)" },
      { id: "de-vector", label: "Vector Databases (Pinecone, pgvector, Weaviate)" },
      { id: "de-streaming", label: "Data Streaming (Kafka, Flink)" },
    ],
  },
  {
    title: "AI Systems & Architecture",
    skills: [
      { id: "ai-agents", label: "AI Agents & Agentic Frameworks (LangChain, AutoGen)" },
      { id: "ai-tools", label: "Tool & Function Calling" },
      { id: "ai-memory", label: "Memory Systems & Context Management" },
      { id: "ai-evaluation", label: "LLM Evaluation & Benchmarking" },
      { id: "ai-safety", label: "AI Safety, Alignment & Ethics" },
      { id: "ai-quantize", label: "Model Compression, Quantization & Pruning" },
    ],
  },
  {
    title: "Soft Skills & Research",
    skills: [
      { id: "soft-papers", label: "Reading & Implementing Research Papers (arXiv)" },
      { id: "soft-comms", label: "Communicating AI Findings to Non-technical Stakeholders" },
      { id: "soft-project", label: "End-to-End AI Project Delivery" },
      { id: "soft-collab", label: "Collaborative Development & Code Review" },
      { id: "soft-blog", label: "Technical Writing / Blogging / Open Source Contributions" },
    ],
  },
];

const STORAGE_KEY = "road-to-ai-checked";

function loadChecked(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {
    /* ignore */
  }
  return new Set();
}

function saveChecked(set: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    /* ignore */
  }
}

export function RoadToAI() {
  const [checked, setChecked] = useState<Set<string>>(() => loadChecked());

  const total = roadmap.reduce((acc, cat) => acc + cat.skills.length, 0);
  const done = checked.size;
  const pct = Math.round((done / total) * 100);

  useEffect(() => {
    saveChecked(checked);
  }, [checked]);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section id="roadtoai" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">07 / Road to AI Engineering</p>
        </Reveal>

        <Reveal delay={50}>
          <h2 className="section-title">Road to AI Engineering</h2>
          <p className="section-text">
            A personal checklist of every fundamental skill I need to master on
            my journey to becoming an AI Engineer. Check off each item as you
            learn it — progress is saved in your browser.
          </p>
        </Reveal>

        {/* Progress bar */}
        <Reveal delay={100}>
          <div className="rtai-progress-wrap">
            <div className="rtai-progress-bar">
              <div
                className="rtai-progress-fill"
                style={{ width: `${pct}%` }}
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <span className="rtai-progress-label">
              {done} / {total} skills · {pct}%
            </span>
          </div>
        </Reveal>

        <div className="rtai-grid">
          {roadmap.map((cat, ci) => {
            const catDone = cat.skills.filter((s) => checked.has(s.id)).length;
            return (
              <Reveal key={cat.title} delay={ci * 60}>
                <div className="rtai-category">
                  <div className="rtai-category-head">
                    <h3 className="rtai-category-title">{cat.title}</h3>
                    <span className="rtai-category-count">
                      {catDone}/{cat.skills.length}
                    </span>
                  </div>
                  <ul className="rtai-skill-list">
                    {cat.skills.map((skill) => {
                      const isChecked = checked.has(skill.id);
                      return (
                        <li key={skill.id} className="rtai-skill-item">
                          <button
                            type="button"
                            className={
                              isChecked
                                ? "rtai-checkbox rtai-checkbox--checked"
                                : "rtai-checkbox"
                            }
                            aria-checked={isChecked}
                            role="checkbox"
                            onClick={() => toggle(skill.id)}
                          >
                            <span className="rtai-checkbox-box" aria-hidden="true">
                              {isChecked && (
                                <svg
                                  viewBox="0 0 12 10"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <polyline points="1,5 4.5,8.5 11,1" />
                                </svg>
                              )}
                            </span>
                            <span
                              className={
                                isChecked
                                  ? "rtai-skill-label rtai-skill-label--done"
                                  : "rtai-skill-label"
                              }
                            >
                              {skill.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
