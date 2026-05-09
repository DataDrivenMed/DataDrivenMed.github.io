---
id: 30
title: "Explanation Artifact: NIH Funding Intelligence Explorer"
category: "Research Strategy, Grants, and Scholarly Productivity"
portfolio_role: "Supporting artifact"
original_file: "Explanation Artifact-NIH Explorer.md"
clean_filename: "explanation-artifact-nih-funding-intelligence-explorer.md"
tags:
  - "NIH funding intelligence"
  - "research strategy"
  - "portfolio exploration"
source_length_chars: 2449
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# Explanation Artifact: NIH Funding Intelligence Explorer

**Portfolio category:** Research Strategy, Grants, and Scholarly Productivity

**Portfolio role:** Supporting artifact

**Tags:** NIH funding intelligence, research strategy, portfolio exploration

**Source evidence excerpt:** ## **Explanation Artifact: NIH Funding Intelligence Explorer** | **What is this** I built the NIH Funding Intelligence Explorer, an interactive dashboard that translates fragmented NIH Data Book statistics into a unified probability landscape. It replaces the whisper networks and outdated payline tables researchers traditionally rely on with "Effective Expected Paylines," allowing faculty to instantly see whether their grant's percentile score sits in a viable funding zone across different insti

## Original Source Content

## **Explanation Artifact: NIH Funding Intelligence Explorer**

**What is this** I built the NIH Funding Intelligence Explorer, an interactive dashboard that translates fragmented NIH Data Book statistics into a unified probability landscape. It replaces the whisper networks and outdated payline tables researchers traditionally rely on with "Effective Expected Paylines," allowing faculty to instantly see whether their grant's percentile score sits in a viable funding zone across different institutes and years. It shifts the investigator's workflow from relying on anecdotal threshold rules to making patternbased, system-informed resubmission decisions.

**Why this approach** I deliberately rejected complex, application-level predictive ML models because the NIH funding environment is a policy-driven, budget-constrained system where black-box prediction offers false precision. Instead, I built a model optimized for decision triage—compressing noisy historical data into categorical 80%, 50%, and 20% probability zones. This approach aligns with how faculty actually make decisions under uncertainty, trading statistical exactness for interpretability and cross-institute comparability.

**What would break** The system is structurally fragile to policy shifts and scoring regime changes; if the NIH alters how percentiles are calculated or if an institute abruptly shifts to portfolio-based funding, the historical data will confidently misrepresent current reality. The most dangerous failure mode, however, is interpretive overconfidence. Because the UI presents clean, color-coded zones, users might mistakenly treat a descriptive historical summary as a prescriptive, deterministic rule, falling back into the rigid threshold thinking the tool was designed to prevent.

**What I learned** I realized that percentiles are not a stable currency across time and institutes, and that smooth probability curves dangerously mask the discrete, often political realities of funding decisions. The most critical discovery was that the actual value of this data lies entirely in the ambiguous 15th-to-35th percentile band, where institutional interpretation matters most. If I started over, I wouldn't touch the data first; I would map out the specific human decision states—like "resubmit immediately" versus "pivot institute" and build the data architecture strictly to support those actions rather than just visualizing an existing dataset.