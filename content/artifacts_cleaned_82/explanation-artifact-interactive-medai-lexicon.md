---
id: 24
title: "Explanation Artifact: Interactive MedAI Lexicon"
category: "AI Governance, Digital Transformation, and Clinical AI Literacy"
portfolio_role: "Supporting artifact"
original_file: "Explanation Artifact for MedAI vercel.md"
clean_filename: "explanation-artifact-interactive-medai-lexicon.md"
tags:
  - "MedAI lexicon"
  - "AI education"
  - "faculty/student learning tool"
  - "website artifact"
source_length_chars: 2879
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# Explanation Artifact: Interactive MedAI Lexicon

**Portfolio category:** AI Governance, Digital Transformation, and Clinical AI Literacy

**Portfolio role:** Supporting artifact

**Tags:** MedAI lexicon, AI education, faculty/student learning tool, website artifact

**Source evidence excerpt:** ## **Explanation Artifact: Interactive MedAI Lexicon** | **What is this** The MedAI Lexicon is an interactive reference platform that translates abstract AI terminology into concrete clinical and research contexts for medical professionals. I built it to solve a critical governance vulnerability: institutions are frequently evaluating AI tools, but faculty and residents lack the shared vocabulary to push back on vendor claims. By providing core terms with live animations and knowledge checks, it

## Original Source Content

## **Explanation Artifact: Interactive MedAI Lexicon**

**What is this** The MedAI Lexicon is an interactive reference platform that translates abstract AI terminology into concrete clinical and research contexts for medical professionals. I built it to solve a critical governance vulnerability: institutions are frequently evaluating AI tools, but faculty and residents lack the shared vocabulary to push back on vendor claims. By providing core terms with live animations and knowledge checks, it moves users past the illusion of understanding so they can rigorously assess the actual technical capabilities of AI systems.

**Why this approach** I chose to build a custom interactive application rather than a static wiki or glossary because the actual barrier to AI literacy isn't access to definitions—it's the confidence required to challenge assumptions in a meeting. Live animations of processes like token generation turn abstract buzzwords into visceral, understood mechanics. While I used AI to scaffold React components and suggest animation libraries, I entirely overrode it on the pedagogical architecture. An LLM optimizes for domain-agnostic completeness, but deciding how to frame "prompt injection" differently for a surgeon worried about patient safety versus a researcher worried about data integrity required irreducible human judgment.

**What would break** The most immediate fragility is content rot; the half-life of AI terminology is short, and without active maintenance, the platform quickly becomes a time capsule. Technically, the application relies on animation libraries that create single points of failure and severely limit accessibility for users relying on screen readers. More fundamentally, the system is built on an untested assumption about user behavior—that clinicians want a searchable reference tool, rather than a structured curriculum. I also designed this under the premise that shared vocabulary drives behavioral change, failing to account for institutional pressures that might override technical understanding during tool adoption.

**What I learned** I started with the assumption that medical professionals needed clearer definitions, but I discovered the actual bottleneck is decision-making under uncertainty. When mapping out the curriculum, AI tools confidently suggested standard technical topics like deep learning, completely missing that clinicians actually care about risk, accountability, and failure modes. I realized that providing role-specific examples wasn't enough because a surgeon and a basic scientist don't just have different contexts—they operate under entirely different threat models. If I were to rebuild this tomorrow, I would abandon the goal of comprehensive reference and instead build a targeted decision framework that helps a busy clinician evaluate an AI system's safety in under ten minutes.