---
id: 27
title: "Explanation Artifact: MedAI Fluency Studio"
category: "AI Governance, Digital Transformation, and Clinical AI Literacy"
portfolio_role: "Supporting artifact"
original_file: "Explanation Artifact-AI Fleuncy Studio.md"
clean_filename: "explanation-artifact-medai-fluency-studio.md"
tags:
  - "AI fluency"
  - "medical education"
  - "microlearning studio"
source_length_chars: 2366
source_note: "Related companion source preserved for completeness"
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# Explanation Artifact: MedAI Fluency Studio

**Portfolio category:** AI Governance, Digital Transformation, and Clinical AI Literacy

**Portfolio role:** Supporting artifact

**Tags:** AI fluency, medical education, microlearning studio

**Source evidence excerpt:** ## **Explanation Artifact: MedAI Fluency Studio** | **What is this** This is a diagnostic assessment tool that generates a personalized "Fluency Map" for users across five core AI competencies: Clinical Practice, Education, Research, Leadership, and Technology. It uses a curated question bank to deliver 20-question rounds (4 per domain) that shuffle with each attempt, providing an immediate radar-chart visualization of a user's expertise. The tool acts as a bridge to personalized education, reco

## Original Source Content

## **Explanation Artifact: MedAI Fluency Studio**

**What is this** This is a diagnostic assessment tool that generates a personalized "Fluency Map" for users across five core AI competencies: Clinical Practice, Education, Research, Leadership, and Technology. It uses a curated question bank to deliver 20-question rounds (4 per domain) that shuffle with each attempt, providing an immediate radar-chart visualization of a user's expertise. The tool acts as a bridge to personalized education, recommending specific "Micromodules" based on the user's identified knowledge gaps.

**Why this approach** I built this using vanilla JavaScript and Chart.js to create a highly responsive, "living" visualization that updates in real-time as users answer questions. I deliberately chose a randomized pulling mechanism from a larger question bank to ensure repeatability; a user can take the assessment multiple times to see their map "expand" as they learn. This approach transforms a static quiz into a dynamic diagnostic, moving away from a simple "pass/fail" score toward a nuanced competency profile that feels tailored to a physician's specific career track.

**What would break** The tool is highly dependent on the browser's ability to render JavaScript; any script-blocking extensions or outdated browser versions will prevent the radar chart from appearing, rendering the results invisible. Because there is no backend storage, the "Personalized Path" is ephemeral—once the page is refreshed, the specific recommendations disappear, and the user must start the quiz over to regain their map. The question-weighting logic is currently hardcoded and simplistic, meaning it cannot yet distinguish between "advanced" and "beginner" questions within the same domain.

**What I learned** I learned that "assessment as an entry point" is far more engaging than "content as an entry point"; users were more likely to watch the micromodules after seeing a low score in a specific area of their radar chart. I also discovered the difficulty of writing distractors for medical AI questions—they have to be technically plausible but clinically distinct. If I started over, I would build a "Save Result" feature that generates a unique URL or QR code, allowing users to share their map or return to their specific learning path without having to re-take the entire diagnostic.