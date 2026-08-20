/* global window */
// Final AI resource library rescue patch.
// Loaded after pages.jsx and before app.jsx so the Library page builds with these artifacts available.
(function () {
  function upsert(a) {
    if (!Array.isArray(window.ARTIFACTS)) return;
    var i = window.ARTIFACTS.findIndex(function (x) { return x && x.id === a.id; });
    if (i >= 0) window.ARTIFACTS[i] = Object.assign({}, window.ARTIFACTS[i], a);
    else window.ARTIFACTS.push(a);
  }

  function normalize() {
    if (!Array.isArray(window.ARTIFACTS)) return;
    window.FLAGSHIP_IDS = Array.isArray(window.FLAGSHIP_IDS) ? window.FLAGSHIP_IDS : [];
    ['ai-18', 'ai-19', 'ai-21', 'ai-22', 'ai-23', 'ai-24'].forEach(function (id) {
      if (window.FLAGSHIP_IDS.indexOf(id) < 0) window.FLAGSHIP_IDS.push(id);
    });
    if (typeof window.applyEvidenceStatusMetadata === 'function') window.applyEvidenceStatusMetadata(window.ARTIFACTS);
    window.ALL_SKILLS = [].concat.apply([], window.ARTIFACTS.map(function (a) { return a.skills || []; })).filter(function (v, i, arr) { return arr.indexOf(v) === i; }).sort();
    window.ALL_AUDIENCES = [].concat.apply([], window.ARTIFACTS.map(function (a) { return a.audience || []; })).filter(function (v, i, arr) { return arr.indexOf(v) === i; }).sort();
    if (Array.isArray(window.HERO_STATS)) {
      var stat = window.HERO_STATS.find(function (s) { return /Artifacts in capability portfolio/i.test(s.lbl || ''); });
      if (stat) stat.num = String(window.ARTIFACTS.length);
    }
  }

  var items = [
    {
      id: 'ai-18',
      title: 'Prompt Injection in Healthcare',
      category: 'ai-governance',
      role: 'Live public AI safety and governance education artifact',
      summary: 'Public AI safety resource for academic health sciences faculty and staff explaining prompt injection as a trust, workflow, and system-design problem in healthcare. Includes healthcare-specific examples, warning signs, response steps, organizational controls, and the PAUSE framework.',
      skills: ['AI governance', 'Prompt injection', 'AI safety', 'Cybersecurity translation', 'Healthcare risk communication', 'Faculty AI literacy', 'Workflow controls'],
      audience: ['Faculty', 'Staff', 'Clinicians', 'Researchers', 'Educators', 'Administrators', 'Privacy', 'Compliance', 'Informatics', 'AI governance committees'],
      strategic: 'Demonstrates the ability to translate a technical AI security threat into practical workforce education and institutional governance guidance for academic health sciences settings. The artifact links cybersecurity-aware AI governance with clinical, educational, research, and administrative workflows without overclaiming policy authority.',
      sourceFile: 'prompt-injection-healthcare-ai-safety-resource.md',
      cleanFile: 'prompt-injection-healthcare-ai-safety-resource.md',
      tags: ['Prompt injection', 'AI safety', 'Healthcare AI', 'Cybersecurity', 'PAUSE framework', 'AI governance', 'Faculty education'],
      featured: true,
      confidential: false,
      liveUrl: 'https://datadrivenmed.github.io/resources/prompt-injection-healthcare/',
      liveLabel: 'Launch resource',
      fullArtifactUrl: 'artifact.html?file=prompt-injection-healthcare-ai-safety-resource.md&id=ai-18'
    },
    {
      id: 'ai-19',
      title: 'AI Agents in Medicine',
      category: 'ai-governance',
      role: 'Live public faculty-facing AI literacy and institutional strategy artifact',
      summary: 'Public education and governance resource for academic health sciences faculty and staff explaining how AI agents differ from ordinary chatbots and why autonomy, tools, memory, retrieval, permissions, and human review change the risk profile of AI systems in medicine.',
      skills: ['AI governance', 'Agentic AI', 'Faculty AI literacy', 'Academic medicine strategy', 'Workflow design', 'Human-in-the-loop governance', 'AI implementation planning'],
      audience: ['Faculty', 'Staff', 'Researchers', 'Program directors', 'Administrators', 'Clinical partners', 'AI governance committees', 'Research leadership'],
      strategic: 'Demonstrates the ability to translate agentic AI from a vendor-driven technology category into a practical institutional framework for education, research, clinical partner pilots, and administrative operations. The artifact supports institutional readiness by clarifying autonomy, permissions, data sensitivity, human review, and partner-governed deployment boundaries.',
      sourceFile: 'ai-agents-in-medicine-resource.md',
      cleanFile: 'ai-agents-in-medicine-resource.md',
      tags: ['AI agents', 'Agentic AI', 'Academic medicine', 'AI literacy', 'Digital transformation', 'Governance', 'Human review'],
      featured: true,
      confidential: false,
      liveUrl: 'https://datadrivenmed.github.io/resources/ai-agents/',
      liveLabel: 'Launch resource',
      fullArtifactUrl: 'artifact.html?file=ai-agents-in-medicine-resource.md&id=ai-19'
    },
    {
      id: 'ai-20',
      title: 'Safe Use of AI in Health Professions Education',
      category: 'ai-governance',
      role: 'Live public health professions education governance artifact',
      summary: 'Public faculty and staff education resource focused on responsible AI use in health professions learning environments. Frames safe AI use around role, data type, intended purpose, human review, institutional approval, professionalism, learner assessment, and clinical-site boundaries.',
      skills: ['AI governance', 'Health professions education', 'Faculty AI literacy', 'Learner assessment', 'Academic integrity', 'Privacy-aware education', 'Medical education policy translation'],
      audience: ['Faculty', 'Staff', 'Students', 'Residents', 'Fellows', 'Program directors', 'Medical educators', 'Student Affairs', 'UME', 'GME'],
      strategic: 'Demonstrates the ability to translate AI governance into the educational operating environment of health professions programs. The artifact connects AI literacy, learner support, assessment validity, professionalism, privacy, and clinical-site governance in a form usable by faculty and staff.',
      sourceFile: 'ai-health-professions-safe-use-resource.md',
      cleanFile: 'ai-health-professions-safe-use-resource.md',
      tags: ['AI safe use', 'Health professions education', 'Medical education', 'Faculty education', 'Academic integrity', 'AI governance', 'Learner support'],
      featured: false,
      confidential: false,
      liveUrl: 'https://datadrivenmed.github.io/resources/ai-health-professions-safe-use/',
      liveLabel: 'Launch resource',
      fullArtifactUrl: 'artifact.html?file=ai-health-professions-safe-use-resource.md&id=ai-20'
    },
    {
      id: 'ai-21',
      title: 'LLM Faculty Brief',
      category: 'ai-governance',
      role: 'Live public faculty AI literacy and safe-use briefing',
      summary: 'Faculty-facing resource that translates large language model concepts, capabilities, limits, and safe-use expectations for academic health sciences faculty and staff.',
      skills: ['Faculty AI literacy', 'LLM education', 'AI governance', 'Responsible AI use', 'Academic medicine communication'],
      audience: ['Faculty', 'Staff', 'Educators', 'Program directors', 'Academic leaders'],
      strategic: 'Demonstrates the ability to translate rapidly evolving AI capability into practical faculty-facing guidance that supports safe adoption, critical evaluation, and shared institutional vocabulary.',
      sourceFile: 'llm-faculty-brief-resource.md',
      cleanFile: 'llm-faculty-brief-resource.md',
      tags: ['LLM', 'Faculty brief', 'AI literacy', 'Responsible AI', 'Academic health sciences'],
      featured: true,
      confidential: false,
      liveUrl: 'https://datadrivenmed.github.io/LLM-Faculty-Brief/',
      liveLabel: 'Launch resource',
      fullArtifactUrl: 'artifact.html?file=llm-faculty-brief-resource.md&id=ai-21'
    },
    {
      id: 'ai-22',
      title: 'LLM Technical Brief',
      category: 'ai-governance',
      role: 'Live public technical AI literacy briefing',
      summary: 'Technical companion resource explaining large language model architecture, retrieval, context windows, embeddings, evaluation, and implementation considerations for academic health sciences audiences.',
      skills: ['LLM architecture', 'Technical translation', 'Retrieval augmented generation', 'AI evaluation', 'Implementation planning'],
      audience: ['Faculty', 'Staff', 'Researchers', 'Informatics', 'IT partners', 'AI governance committees'],
      strategic: 'Bridges leadership-facing AI governance with technical implementation literacy, helping non-specialist academic health sciences stakeholders understand how model behavior, retrieval, evaluation, and integration choices affect institutional risk.',
      sourceFile: 'llm-technical-brief-resource.md',
      cleanFile: 'llm-technical-brief-resource.md',
      tags: ['LLM', 'Technical brief', 'RAG', 'Embeddings', 'AI architecture', 'AI governance'],
      featured: true,
      confidential: false,
      liveUrl: 'https://datadrivenmed.github.io/LLM-Technical-Brief/',
      liveLabel: 'Launch resource',
      fullArtifactUrl: 'artifact.html?file=llm-technical-brief-resource.md&id=ai-22'
    },
    {
      id: 'ai-23',
      title: 'Agentic EHR Field Guide',
      category: 'ai-governance',
      role: 'Live public clinical AI governance and EHR workflow briefing',
      summary: 'Field guide for understanding agentic AI in and around EHR-connected workflows, including autonomy, permissions, human review, workflow boundaries, patient-safety risk, and partner-governed implementation requirements.',
      skills: ['Agentic AI', 'EHR governance', 'Clinical AI risk', 'Human-in-the-loop oversight', 'Workflow design', 'Partner-governed implementation'],
      audience: ['Clinical leaders', 'Faculty', 'GME leadership', 'Program directors', 'Informatics', 'Health-system partners', 'AI governance committees'],
      strategic: 'Positions EHR-connected agentic AI as a governance and operating-model issue rather than a simple technology deployment, with clear attention to boundaries between academic medicine, affiliated clinical sites, privacy review, and patient-safety oversight.',
      sourceFile: 'agentic-ehr-field-guide-resource.md',
      cleanFile: 'agentic-ehr-field-guide-resource.md',
      tags: ['Agentic EHR', 'Clinical AI', 'EHR', 'Human review', 'Patient safety', 'AI governance'],
      featured: true,
      confidential: false,
      liveUrl: 'https://datadrivenmed.github.io/agentic-ehr-field-guide/',
      liveLabel: 'Launch resource',
      fullArtifactUrl: 'artifact.html?file=agentic-ehr-field-guide-resource.md&id=ai-23'
    },
    {
      id: 'ai-08',
      title: 'ChatGPT for Clinicians',
      category: 'ai-governance',
      role: 'Live public clinical AI safety briefing',
      summary: 'Clinician-facing resource translating ChatGPT-related clinical AI risks, use boundaries, and governance considerations for health professions settings.',
      skills: ['Clinical AI safety', 'ChatGPT', 'AI triage risk', 'Faculty education', 'Clinical governance', 'Risk communication'],
      audience: ['Clinicians', 'Faculty', 'Trainees', 'GME', 'Program directors', 'Clinical educators'],
      strategic: 'Demonstrates the ability to translate clinical AI evidence and risk into practical guidance for clinicians and trainees, while preserving human oversight, clinical judgment, and local governance boundaries.',
      sourceFile: 'chatgpt-for-clinicians-resource.md',
      cleanFile: 'chatgpt-for-clinicians-resource.md',
      tags: ['ChatGPT', 'Clinicians', 'Clinical AI', 'AI safety', 'Faculty education'],
      featured: true,
      confidential: false,
      liveUrl: 'https://datadrivenmed.github.io/ChatGPT-for-Clinicians/',
      liveLabel: 'Launch resource',
      fullArtifactUrl: 'artifact.html?file=chatgpt-for-clinicians-resource.md&id=ai-08'
    },
    {
      id: 'ai-24',
      title: 'Enterprise AI for Academic Health Sciences',
      category: 'ai-governance',
      role: 'Live public enterprise AI governance and operating-model artifact',
      summary: 'Enterprise AI resource framing generative and agentic AI as an institutional capability requiring governance, role clarity, implementation pathways, risk controls, workflow ownership, and executive decision infrastructure.',
      skills: ['Enterprise AI', 'AI governance', 'Operating model design', 'Digital transformation', 'Executive decision support', 'Risk controls'],
      audience: ['Dean', 'Senior leadership', 'Faculty', 'Staff', 'Administrators', 'AI governance committees', 'IT partners'],
      strategic: 'Demonstrates systems-level AI governance capacity by connecting enterprise strategy, operating models, workforce literacy, risk controls, and implementation sequencing for academic health sciences organizations.',
      sourceFile: 'enterprise-ai-resource.md',
      cleanFile: 'enterprise-ai-resource.md',
      tags: ['Enterprise AI', 'Operating model', 'AI governance', 'Digital transformation', 'Academic health sciences'],
      featured: true,
      confidential: false,
      liveUrl: 'https://datadrivenmed.github.io/Enterprise-AI/',
      liveLabel: 'Launch resource',
      fullArtifactUrl: 'artifact.html?file=enterprise-ai-resource.md&id=ai-24'
    }
  ];

  items.forEach(upsert);
  normalize();
  window.__AI_LIBRARY_RESCUE_LOADED__ = true;
})();
