---
id: 11
title: "COVID-19 Epidemiological Tracking Tableau Dashboard"
category: "Public Health Analytics and Data Visualization"
portfolio_role: "Flagship case study"
original_file: "COVID Tableau Dashboard.md"
clean_filename: "covid-19-epidemiological-tracking-tableau-dashboard.md"
tags:
  - "Tableau dashboard"
  - "Rt estimation"
  - "public health visualization"
  - "test-adjusted infection rate"
source_length_chars: 3641
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# COVID-19 Epidemiological Tracking Tableau Dashboard

**Portfolio category:** Public Health Analytics and Data Visualization

**Portfolio role:** Flagship case study

**Tags:** Tableau dashboard, Rt estimation, public health visualization, test-adjusted infection rate

**Source evidence excerpt:** title: "COVID-19 Epidemiological Tracking Dashboard" | category: "Public Health Analytics / Data Visualization" | skills:

## Original Source Content

title: "COVID-19 Epidemiological Tracking Dashboard"
category: "Public Health Analytics / Data Visualization"
skills:

Epidemiological modeling (Rt estimation)
Test-adjusted infection rate normalization
Tableau dashboard development
Population-level statistical analysis
Data communication for non-technical audiences
Genomic surveillance integration (Nextstrain)


COVID-19 Epidemiological Tracking Dashboard
Why I Built This
Confirmed case counts were a poor basis for comparing states. Testing capacity varied wildly, which meant high-positivity states were almost certainly undercounting infections relative to low-positivity ones. I needed a denominator that was closer to reality.
My approach was to estimate total infections by adjusting confirmed cases against test positivity rates, then normalize by population. That gave me a more defensible basis for cross-state comparison — not perfect, but considerably more honest than raw case counts.
Technical Execution
Starting in April 2020, I plotted Rt (the effective transmission rate) against the percentage of the population currently infectious. Rt is the average number of new infections caused by a single case at a given point in time. Below 1, an outbreak contracts. Above 1, it grows — exponentially. I used a rolling 10-day infection window, calibrated to the roughly nine-day window during which people typically carry replication-competent virus.
The resulting plots had two annotated zones. A red zone flagged states on trajectory to overwhelm hospital capacity within approximately two weeks. On the opposite end, I defined a target zone — low Rt, low active burden — as the condition under which phased reopening could proceed without rapid rebound. I called it the "O-zone" deliberately; a purely clinical label would have reduced readership.
I also tracked under-detection over time. Early in the pandemic, test positivity was a reasonable proxy for how many infections we were missing. Later, comparing deaths per capita against cases per capita proved more informative. If the infection fatality rate sits around 0.5% and the observed death-per-case ratio is running near 2%, that implies roughly one in four infections is being identified. The missed cases skew younger but still drive transmission.
To supplement the epidemiological layer, I integrated genomic data from Nextstrain — tracking how the virus mutated and spread geographically as variants emerged. This added a dimension that case counts alone couldn't provide.
Impact and Outcomes
The dashboard made one thing visible that pure case charts could not: both the current burden and the directional trajectory of an outbreak, simultaneously, for any state. That combination mattered for practical decisions — school reopening, activity resumption — where community spread level and mitigation quality interact.
The underlying math has an important asymmetry. At Rt of 2, infections double roughly every five days; a single month of unchecked spread can amplify case counts more than sixtyfold. Bringing Rt to 0.8 walks that back, but takes approximately three times as long. Visualizing this asymmetry in a format accessible to non-epidemiologists was one of the dashboard's core purposes.
For school reopening specifically, the dashboard illustrated a probability-based framing: at 1% community infection prevalence, a group of 20 people has roughly a 20% chance of containing at least one infectious individual. Reduce community spread to 0.1% and layered mitigation becomes viable. That relationship — between outside conditions and inside risk — is what the dashboard was designed to make intuitive.