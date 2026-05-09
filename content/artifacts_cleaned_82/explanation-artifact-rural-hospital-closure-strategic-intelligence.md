---
id: 26
title: "Explanation Artifact: Rural Hospital Closure Strategic Intelligence"
category: "Community, Rural Health, Policy, and External Consultation"
portfolio_role: "Supporting artifact"
original_file: "Explanation Artifact- Rural Hospital Closure.md"
clean_filename: "explanation-artifact-rural-hospital-closure-strategic-intelligence.md"
tags:
  - "Rural hospital closure"
  - "strategic intelligence"
  - "rural health risk"
source_length_chars: 2393
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# Explanation Artifact: Rural Hospital Closure Strategic Intelligence

**Portfolio category:** Community, Rural Health, Policy, and External Consultation

**Portfolio role:** Supporting artifact

**Tags:** Rural hospital closure, strategic intelligence, rural health risk

**Source evidence excerpt:** ## **Explanation Artifact: Rural Health Strategic Intelligence** | **What is this** This is a custom-coded interactive web application that analyzes closure patterns and financial vulnerability across 2,496 rural US hospitals. It processes historical data to visualize state-level risk aggregates and evaluate the effectiveness of federal healthcare policies, such as the 94.4% closure rate of Medicare-Dependent Hospitals. Rather than serving as an operational decision engine for individual facilit

## Original Source Content

## **Explanation Artifact: Rural Health Strategic Intelligence**

**What is this** This is a custom-coded interactive web application that analyzes closure patterns and financial vulnerability across 2,496 rural US hospitals. It processes historical data to visualize state-level risk aggregates and evaluate the effectiveness of federal healthcare policies, such as the 94.4% closure rate of Medicare-Dependent Hospitals. Rather than serving as an operational decision engine for individual facilities, it is designed as a policy intelligence dashboard to help state and federal stakeholders draw systemslevel conclusions.

**Why this approach** I built this using a static HTML/JS and Chart.js stack hosted on GitHub Pages primarily to maintain pixel-perfect, "McKinsey-style" visual control. While a BI tool like Tableau would have been infinitely faster to build and easier for an institution to maintain, I prioritized a specific aesthetic and zero-infrastructure deployability for public thought leadership. I used AI to accelerate chart configuration and CSS grid layout, but deliberately overrode its suggestions to use heavier libraries like D3.js and overly complex regex filtering logic that would have bloated the application.

**What would break** The architecture is inherently fragile, relying on hardcoded JSON arrays that will silently fail if the data schema changes or expands. It cannot scale gracefully; rendering the current DOM and Chart.js instances already tests mobile browser memory, and expanding to a larger dataset would cause severe UI degradation. Additionally, the risk scoring methodology relies on hardcoded empirical weights without built-in sensitivity analysis, and the monolithic filtering logic makes adding complex cross-queries unmaintainable without a complete refactor.

**What I learned** I realized that by hardcoding "high-risk" margin thresholds rather than building sensitivity sliders, I forced a narrative instead of enabling methodological transparency. I also recognized that my policy recommendations were backwardengineered from correlations in the data, lacking explicit acknowledgment of alternative hypotheses like geographic selection bias. Ultimately, I learned that I defaulted to optimizing for a beautiful communication artifact when I should have built a scientifically robust data explorer supported by a strict data dictionary.