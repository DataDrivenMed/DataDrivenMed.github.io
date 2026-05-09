---
id: 31
title: "Explanation Artifact: OpenEvidence Clinical Briefing"
category: "AI Governance, Digital Transformation, and Clinical AI Literacy"
portfolio_role: "Supporting artifact"
original_file: "Explanation Artifact-OpenEvidence.md"
clean_filename: "explanation-artifact-openevidence-clinical-briefing.md"
tags:
  - "OpenEvidence"
  - "clinical briefing"
  - "AI tool evaluation"
source_length_chars: 3193
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# Explanation Artifact: OpenEvidence Clinical Briefing

**Portfolio category:** AI Governance, Digital Transformation, and Clinical AI Literacy

**Portfolio role:** Supporting artifact

**Tags:** OpenEvidence, clinical briefing, AI tool evaluation

**Source evidence excerpt:** ## **Explanation Artifact: OpenEvidence Clinical Briefing** | **What is this** This is a single, static HTML file functioning as a long-form analytical briefing document for clinical faculty and residents at LSU Health and Tulane GME programs. It synthesizes 18 internal documents into a 3400-line, 18-section interactive report covering OpenEvidence's technical architecture, clinical benchmarks (like its 34% accuracy on complex queries), failure modes, and business model. It provides a structured

## Original Source Content

## **Explanation Artifact: OpenEvidence Clinical Briefing**

**What is this** This is a single, static HTML file functioning as a long-form analytical briefing document for clinical faculty and residents at LSU Health and Tulane GME programs. It synthesizes 18 internal documents into a 3400-line, 18-section interactive report covering OpenEvidence's technical architecture, clinical benchmarks (like its 34% accuracy on complex queries), failure modes, and business model. It provides a structured evaluation framework that clinicians can navigate via client-side features like scroll-spy, Chart.js visualizations, and a reading progress bar.

**Why this approach** I chose a bespoke, zero-dependency HTML file over a PDF or Substack because it's the only format that allows for version control, interactive navigation, and offline mobile-responsiveness without third-party lock-in. I explicitly rejected using React or a static site generator because a 50MB node\_modules directory is overengineering for a document that requires no state beyond scroll position. While I used Claude to extract data points and generate boilerplate CSS, I had to completely override the AI on architectural decisions (like fixing flexbox CSS logic) and pedagogical framing—such as rewriting a passive summary of their business model to directly state, "The tool is free because pharmaceutical companies pay to reach you."

**What would break** The most catastrophic breaking point is contextual rot: the analysis is pegged to April 9, 2026, and because OpenEvidence ships updates rapidly, a clinician reading this in September 2026 might base an institutional decision on stale technical claims. Technically, the document relies on Cloudflare CDNs for Chart.js and Google Fonts; if those endpoints deprecate or rot, the visualizations will silently fail and leave blank boxes. Additionally, the hardcoded 900px responsive breakpoints will likely fracture the UI on newer foldable phones or ultrawide monitors, and the vanilla JavaScript scrollspy will behave erratically if an institution embeds the HTML inside an iframe like Canvas or Blackboard.

**What I learned** I started with the assumption that a high volume of source documents meant comprehensive truth, but I discovered that multiple files repeating a claim (like "100% on USMLE") is often just amplified uncertainty, not verified evidence. I also learned that while AI is excellent at synthesizing factual contradictions, it is entirely blind to conflicting analytical frameworks; I had to manually intervene when documents used incompatible mental models to analyze the same data. If I were to build a similar briefing tomorrow, I would segregate the factual, interpretive, and judgmental layers entirely, and I would place a massive version-expiration warning at the very top of the page.

**A brief note:** This explanation artifact is ready to attach to your work. Whether it lives in the GitHub repository, on your TalentBoard profile, or as a meta-layer on the document itself, it proves that you didn't just generate a page—you engineered a specific solution for a highly specific audience, and you know exactly where its fault lines lie.