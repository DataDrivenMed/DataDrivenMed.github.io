---
id: 25
title: "MedAI Teaching Guide Explanation Artifact"
category: "AI Governance, Digital Transformation, and Clinical AI Literacy"
portfolio_role: "Supporting artifact"
original_file: "Explanation Artifact- Med-AI teaching module.md"
clean_filename: "medai-teaching-guide-explanation-artifact.md"
tags:
  - "Teaching module"
  - "educator-friendly AI curriculum"
  - "medical school concepts"
source_length_chars: 4293
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# MedAI Teaching Guide Explanation Artifact

**Portfolio category:** AI Governance, Digital Transformation, and Clinical AI Literacy

**Portfolio role:** Supporting artifact

**Tags:** Teaching module, educator-friendly AI curriculum, medical school concepts

**Source evidence excerpt:** ## **MedAI Teaching Guide — Explanation Artifact** | **What is this** A single self-contained HTML file (260 KB) serving as an educator-facing companion to the MedAI Lexicon. It covers all 29 AI concepts across five curriculum categories — Model Fundamentals, Prompt Mastery, Practical Use Cases, Safety & Evaluation, and Workflow & Governance. Each concept card has four tabs: a dual-lens definition (clinician and researcher), a "Why Teach This" panel with a common misconception callout, a "How to

## Original Source Content

## **MedAI Teaching Guide — Explanation Artifact**

**What is this** A single self-contained HTML file (260 KB) serving as an educator-facing companion to the MedAI Lexicon. It covers all 29 AI concepts across five curriculum categories — Model Fundamentals, Prompt Mastery, Practical Use Cases, Safety & Evaluation, and Workflow & Governance. Each concept card has four tabs: a dual-lens definition (clinician and researcher), a "Why Teach This" panel with a common misconception callout, a "How to Teach" panel with a verified live-demo tool and three teaching format adaptations, and a knowledge-check MCQ with tracked progress. The file requires no server, no database, no login — it opens directly in any browser and links out to free, no-login third-party tools for in-class demonstrations.

**Why this approach** A single static HTML file was the right architecture for a resource that must be deployed on Vercel, shared via email, and opened by faculty with no technical setup. All state (quiz progress, open/closed cards, active tabs) lives in vanilla JavaScript without any framework dependency. Category colors are applied dynamically on card open so the file stays maintainable — changing a color means changing one CSS variable, not hunting through 29 hardcoded blocks. Tool selection prioritized browser-native, educatoraccessible demos (CMU Word Embedding Demo for embeddings, 3Blue1Brown for attention, Tiktokenizer for tokenization) over technically richer but navigation-heavy alternatives.

**What would break** Google Fonts loads over CDN — offline use or strict institutional firewalls would fall back to system serif/sans, which is acceptable but degrades the typographic hierarchy. The copy-to-clipboard function (navigator.clipboard) requires HTTPS; it silently fails on plain HTTP. The Diffusion Bias Explorer (Hugging Face Spaces) occasionally has cold-start latency of 30–60 seconds and could go offline if the Space is paused. External tool links (ChatGPT, Perplexity, 3Blue1Brown) are not versioned — vendor UI changes could invalidate the step-by-step walkthroughs without warning. Quiz progress is session-only and resets on page reload.

**What I learned** The hardest design constraint was tool selection: the instinct is to reach for the most technically accurate visualization, but the right choice for a naive faculty audience is the tool that requires the fewest navigation decisions before the learning moment arrives. The CMU Word Embedding Demo replaced TensorFlow Embedding Projector specifically because it has a Tutorial tab that front-loads the conceptual frame before the 3D interface — that sequencing is the entire pedagogical difference. The other consistent finding: for any concept where the live demo can produce a surprising or wrong output in front of the class (hallucination exercise, bias explorer, tokenization of rare

| terms), the moment of surprise is more durable as a teaching event than any explanation<br>preceding it. |
|----------------------------------------------------------------------------------------------------------|
|                                                                                                          |
|                                                                                                          |
|                                                                                                          |
|                                                                                                          |
|                                                                                                          |
|                                                                                                          |
|                                                                                                          |
|                                                                                                          |
|                                                                                                          |
|                                                                                                          |
|                                                                                                          |