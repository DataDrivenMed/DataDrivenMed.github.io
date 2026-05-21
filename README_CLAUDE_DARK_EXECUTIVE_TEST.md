# Historical Redesign Test Package

This file is retained as historical implementation context. The current repository source-of-truth is `README.md`, which documents the public portfolio purpose, evidence boundaries, status taxonomy, and local testing workflow.

The original package used the final working Step 20 portfolio site as the base and overlaid Claude's darker executive visual redesign files.

Preserved from the working site:
- all 82 artifact content files
- capability map image
- artifact detail routing
- library data and filters
- GitHub Pages static deployment structure
- live Hugging Face assistant embed

Embedded assistant URL:
https://ramparagi-ask-ram-portfolio-streamlit.hf.space

Important validation checks:
- Homepage should say 25+ departments and centers, not 900+ faculty.
- Ask page should show the live Hugging Face assistant.
- Library should still load all 82 artifacts.
- All 12 capability domains should remain.
- Artifact detail pages should still open.

Local testing:
1. Unzip this package.
2. Open the folder in VS Code.
3. Run: python -m http.server 8000
4. Open: http://localhost:8000/
5. Test: /#/ask, /#/library, /#/capabilities, /#/case-studies
