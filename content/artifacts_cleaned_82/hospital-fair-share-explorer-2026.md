---
id: ev-hospital-fair-share-2026
title: "Hospital Fair Share Explorer: Community Investment & Tax Benefits (2026)"
category: "Analytics, Dashboards & Decision Intelligence"
portfolio_role: "Independent public-data visualization and interpretation"
publication_status: "Live public artifact"
confidentiality_review: "Published public data only"
clean_filename: "hospital-fair-share-explorer-2026.md"
tags:
  - Healthcare financial analytics
  - Community investment
  - Tax exemption
  - Data reconciliation
  - Interactive visualization
---

# Hospital Fair Share Explorer: Community Investment & Tax Benefits (2026)

**Source evidence excerpt:** An independent interactive map and hospital explorer translating the Lown Institute's published fair-share estimates into an accessible public decision-support tool. The contribution combines healthcare financial interpretation, geographic visualization, transparent data reconciliation and plain-language explanation across 3,037 hospital records.

## Live artifact

[Launch Hospital Fair Share Explorer](https://datadrivenmed.github.io/hospital-fair-share-2026.html)

[Browse the portfolio evidence library](https://datadrivenmed.github.io/#/library?cat=analytics)

## Professional summary

The explorer compares the community investment counted by the Lown Institute with the estimated value of nonprofit hospitals' tax exemptions. It connects a US state map to state rankings, a searchable hospital table, exact-dollar hospital details and CSV exports. A reading guide explains the five map measures and the distinction between total hospital deficits and net fair share spending.

The report year is 2026, while the financial data are for fiscal years ending in 2023. The source snapshot was captured on November 17, 2026. The dataset contains 3,037 published hospital rows across 50 states and Washington, DC. It is a selected hospital cohort, not a census of every US hospital.

## Role and contribution

Ram Paragi directed the design and development of the independent visualization, its metric structure, interpretation guide, reconciliation checks and public portfolio presentation. The Lown Institute produced the underlying hospital estimates and fair-share methodology. This artifact does not claim authorship of the original study, access to unpublished hospital records, affiliation with the Lown Institute or independent validation of its estimates.

## What the tool does

- Maps the percentage of hospitals with a deficit, total hospital deficits, net fair share spending, investment relative to tax exemption, and estimated tax exemption value.
- Links state selection to summary cards, the state detail panel and hospital table, with a Louisiana shortcut.
- Supports hospital and city search, deficit/surplus filters, sorting and exact-dollar hospital details.
- Exports all state aggregates or the filtered hospital records as CSV files.
- Includes a self-contained HTML version with data, geometry, styles and scripts embedded, without API keys or an application server.

## What a deficit means

A fair share deficit means a hospital's community investment, as counted by Lown, is lower than its estimated tax benefits. A hospital can have a deficit while still making substantial investments.

| Illustrative measure | Amount |
| --- | --- |
| Estimated tax benefits | $10 million |
| Community investment counted by Lown | $6 million |
| Fair share balance | -$4 million deficit |

The example hospital invested $6 million in the counted categories. Its deficit is the $4 million difference between that investment and its estimated tax benefits. The example is illustrative and does not describe a particular hospital.

Lown counts financial assistance, subsidized health services and certain community programs. Its framework excludes Medicaid shortfall, medical education and research. A deficit alone does not establish that a hospital provides no community benefit, is operating at a financial loss or has violated tax-exemption requirements.

## Metric and data-quality decisions

State aggregates are calculated from the hospital rows. Total deficits sum negative balances only; surpluses sum positive balances; net spending combines both. Deficit percentage uses included hospital counts. Investment coverage divides aggregate investment by aggregate estimated tax exemption. Dollar totals are not adjusted for population or patient need.

The source's Missouri summary lists 64 hospitals, while its hospital table contains 63 Missouri rows. Ohio hospital deficits sum to -$1,349,745,390, compared with -$1,349 million in the rounded state summary. The hospital rows contain 1,563 deficit hospitals, yielding 51.5% when displayed to one decimal, compared with the report's 52% headline. These differences are disclosed in the tool. Original hospital fair-share balances are preserved where rounded investment and tax components differ by $1.

The map represents state aggregates. It does not place invented hospital coordinates on the map. Alaska and Hawaii appear as insets; Washington, DC is selectable separately.

## Strategic significance

The artifact demonstrates how an analyst can make a complex public financial framework usable without hiding its assumptions. It combines healthcare finance literacy, reproducible aggregation, data-quality review, geographic communication and an explanation suited to nontechnical readers. The public output can support exploratory comparisons and informed questions about hospital community investment; it does not establish causal effects or institutional performance beyond the source measure.

## Evidence and interpretation boundaries

The explorer is a static snapshot of published data. It is not a clinical quality score, independent financial audit, legal determination or assessment of all community benefit categories. System-level reporting may be allocated to individual hospitals under Lown's methodology. No claim is made that a health system adopted the tool, that it changed policy, or that use or community impact has been measured.

## Sources

- [Lown Institute: Hospital Fair Share Spending, 2026, including methodology and limitations](https://lownhospitalsindex.org/hospital-fair-share-spending-2026/)
- [US state boundaries: PublicaMundi MappingAPI](https://github.com/PublicaMundi/MappingAPI/blob/master/data/geojson/us-states.json)
- [D3.js](https://d3js.org/)
