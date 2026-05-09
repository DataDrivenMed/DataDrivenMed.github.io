---
id: 36
title: "Explanation Artifact: Louisiana Women and Children Health Analytics Dashboard"
category: "Public Health Analytics and Data Visualization"
portfolio_role: "Supporting artifact"
original_file: "Explanation Artifact-Women and Childrens.md"
clean_filename: "explanation-artifact-louisiana-women-and-children-health-analytics-dashboard.md"
tags:
  - "Women and children health analytics"
  - "Louisiana dashboard"
  - "population health"
source_length_chars: 2384
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# Explanation Artifact: Louisiana Women and Children Health Analytics Dashboard

**Portfolio category:** Public Health Analytics and Data Visualization

**Portfolio role:** Supporting artifact

**Tags:** Women and children health analytics, Louisiana dashboard, population health

**Source evidence excerpt:** ## **Explanation Artifact: Louisiana Women & Children Health Analytics Dashboard** | **What is this** I built the Louisiana Women & Children Health Analytics Dashboard, an interactive, browser-based visualization tool that renders the United Health Foundation's 86,000+ data points across 1,650 measures into accessible state-level and Louisianaspecific insights. It translates a dense national report into an actionable narrative for medical school leadership, revealing the hard truth that while ou

## Original Source Content

## **Explanation Artifact: Louisiana Women & Children Health Analytics Dashboard**

**What is this** I built the Louisiana Women & Children Health Analytics Dashboard, an interactive, browser-based visualization tool that renders the United Health Foundation's 86,000+ data points across 1,650 measures into accessible state-level and Louisianaspecific insights. It translates a dense national report into an actionable narrative for medical school leadership, revealing the hard truth that while our local clinical care metrics (like well-woman visits) are strong, our overall health outcomes are severely hindered by underlying social determinants.

**Why this approach** I deliberately chose a public, GitHub-hosted web tool over a lockeddown enterprise Tableau dashboard because mission alignment matters more than compliance theater. Our institution's strategic plan demands visibility and a stronger presence in health equity, which an invisible, gatekept tool cannot achieve. While this open approach sacrifices IT-managed audit trails and telemetry, it prioritizes reach, iteration speed, and the modern standard of establishing credibility through complete data transparency.

**What would break** The system's greatest fragility lies in data ingestion and unmonitored methodology shifts from the upstream source. Because the pipeline relies on manual updates rather than an automated, schema-validated feed, a silent change in how the Foundation defines a metric could present as a false clinical trend that policymakers might unwittingly cite. Additionally, the tool lacks built-in interpretive guardrails, leaving the data vulnerable to cherry-picking by users looking to confirm existing biases rather than understand complex, intersecting outcomes.

**What I learned** I realized that interactive dashboards don't prevent data misuse; without narrative guidance, they often enable it by allowing users to hunt for confirmation of their existing beliefs. I also learned the hard distinction between a project and infrastructure: a dashboard without an automated maintenance plan, a sunset policy, and clear institutional governance is just future technical debt. If I started over, I would build a guided narrative rather than an open sandbox, and I would explicitly define institutional liability and update cadences with leadership before writing a single line of code.