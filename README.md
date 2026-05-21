# DataDrivenMed Institutional Strategy Portfolio

Public portfolio site: https://datadrivenmed.github.io/

This repository powers Ram Paragi's public institutional strategy portfolio for academic medicine. It is designed as a status-labeled evidence base, not as a generic AI product page.

## What This Portfolio Covers

- Accreditation systems, CQI, and institutional governance
- GME finance, workforce finance, contracts, and scenario modeling
- Institutional analytics, dashboards, and decision intelligence
- AI governance drafts, clinical AI evaluations, tool vetting, and faculty AI literacy
- Synthetic-data prototypes for public demonstration without confidential data exposure
- Policy translation and research strategy, including grants intelligence, FDA/NCI-facing strategy, and scholarly productivity
- Admissions, UME, Student Affairs, Faculty Affairs, policy translation, simulation, and public digital artifacts

## Evidence Boundaries

The site separates public evidence types so claims are not overstated:

- `Draft / pre-final`: leadership-ready policy or governance work that should not be described as final adopted institutional policy unless separate proof establishes adoption.
- `Internal evidence record`: public summary of work whose underlying source material may be internal.
- `Live public artifact`: externally accessible page, dashboard, briefing, tool, or report.
- `Synthetic data demo`: public prototype using sample or synthetic data only.
- `Evaluation / briefing`: analytical report, framework, or review artifact.
- `Proof-sensitive claim`: claim that may need citation, private packet proof, or softer public wording.

## Important Constraints

Public synthetic prototypes do not contain confidential institutional, patient, trainee, faculty, hospital, partner, or financial records.

Internal evidence records should be treated as public summaries unless supporting source proof is explicitly linked or privately supplied.

Some artifacts summarize internal institutional work. Public pages preserve confidentiality; source evidence, role documentation, or private supporting material can be provided during formal review.

AI governance artifacts should be summarized with their status. For example, the School of Medicine AI governance work is described as a pre-final or leadership-ready draft framework where public proof does not establish final institutional adoption.

## Agent-Facing Source Pages

- `/#/truth-layer`: canonical facts, constraints, evidence taxonomy, and agent-safe summary.
- `/#/claims-evidence`: claims/evidence map with safer rewrites.
- `/#/library`: searchable evidence library.
- `/#/framework`: clinical AI evaluation framework.
- `/#/case-studies`: flagship evidence set.

## Local Testing

Run a static server from this directory:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Recommended checks:

- `/#/truth-layer`
- `/#/claims-evidence`
- `/#/library`
- `/#/framework`
- artifact detail overlays from the library
