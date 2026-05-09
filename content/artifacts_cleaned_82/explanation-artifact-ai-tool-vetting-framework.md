---
id: 35
title: "Explanation Artifact: AI Tool Vetting Framework"
category: "AI Governance, Digital Transformation, and Clinical AI Literacy"
portfolio_role: "Supporting artifact"
original_file: "Explanation Artifact-Vetting AI tools.md"
clean_filename: "explanation-artifact-ai-tool-vetting-framework.md"
tags:
  - "AI tool vetting"
  - "governance"
  - "evaluation criteria"
source_length_chars: 2490
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# Explanation Artifact: AI Tool Vetting Framework

**Portfolio category:** AI Governance, Digital Transformation, and Clinical AI Literacy

**Portfolio role:** Supporting artifact

**Tags:** AI tool vetting, governance, evaluation criteria

**Source evidence excerpt:** ## **Explanation Artifact: Vetting AI Tools** | **What is this** This is a custom-coded, static web resource and visual framework designed to help organizational leaders and individuals evaluate AI tool adoption through a "Bias Towards No" lens. It moves past the noise of the 100,000+ available tools by forcing a three-question vetting process: identifying a measurable pain point, mapping the true cost of sustainment, and identifying the "worst-case" failure mode. Literally, it provides a highle

## Original Source Content

## **Explanation Artifact: Vetting AI Tools**

**What is this** This is a custom-coded, static web resource and visual framework designed to help organizational leaders and individuals evaluate AI tool adoption through a "Bias Towards No" lens. It moves past the noise of the 100,000+ available tools by forcing a three-question vetting process: identifying a measurable pain point, mapping the true cost of sustainment, and identifying the "worst-case" failure mode. Literally, it provides a highlevel strategic roadmap that clarifies why most AI implementations fail—specifically due to added technical complexity and organizational unreadiness rather than tool performance.

**Why this approach** I chose to build this as a GitHub Pages-hosted site using a vanilla HTML/JS stack to ensure it remains a lightweight, zero-cost, and permanently accessible resource for the community. The decision to lead with a "cheatsheet" infographic was a deliberate move to create a high-signal, sharable artifact that translates complex AI riskmanagement concepts into a digestible, one-page executive summary. I prioritized visual clarity and "pixel-perfect" typography over a dynamic backend because the value lies in the mental model, not in complex data processing or user state.

**What would break** The project is architecturally fragile due to its hardcoded nature; any updates to the frameworks or additional examples require manual code changes rather than a simple CMS update. The visual assets (infographics) are static, meaning they do not dynamically scale or adjust if the underlying evaluation criteria evolve based on new AI safety standards. Because there is no backend or database, the project cannot capture user interactions or feedback, making it a "one-way" communication tool rather than an evolving, collaborative platform.

**What I learned** I discovered that the primary challenge in AI adoption isn't technical capability, but the failure to account for "integration friction" and "failure mode stomachability." In building the framework, I realized that my own bias toward technical solutions was a blind spot; I had to shift my focus from what the tools *could* do to what organizations can realistically *sustain*. If I started over, I would build an interactive "Vetting Calculator" alongside the static image to let users input their own tool scenarios and receive a risk/utility score, moving the project from a passive infographic to an active decisionsupport tool.