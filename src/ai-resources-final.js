(function () {
  function upsert(a) {
    if (!Array.isArray(window.ARTIFACTS)) return;
    var i = window.ARTIFACTS.findIndex(function (x) { return x && x.id === a.id; });
    if (i >= 0) window.ARTIFACTS[i] = Object.assign({}, window.ARTIFACTS[i], a);
    else window.ARTIFACTS.push(a);
  }

  function addArtifacts() {
    if (!Array.isArray(window.ARTIFACTS) || window.ARTIFACTS.length < 50) return false;

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
        role: 'Live public faculty AI literacy and governance education artifact',
        summary: 'Faculty-facing brief that translates large language models into practical academic health sciences guidance for teaching, scholarship, advising, administrative work, safe experimentation, privacy boundaries, and human review.',
        skills: ['AI governance', 'Large language models', 'Faculty AI literacy', 'Responsible AI use', 'Academic medicine strategy', 'Education governance'],
        audience: ['Faculty', 'Staff', 'Educators', 'Program directors', 'Researchers', 'AI governance committees'],
        strategic: 'Demonstrates the ability to translate large language models into institutional language faculty and staff can use. The artifact supports shared AI vocabulary, safe adoption, and governance-aware experimentation across academic health sciences settings.',
        sourceFile: 'llm-faculty-brief-resource.md',
        cleanFile: 'llm-faculty-brief-resource.md',
        tags: ['LLM', 'Faculty brief', 'AI literacy', 'Responsible AI', 'Academic health sciences', 'AI governance'],
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
        role: 'Live public technical AI literacy and governance artifact',
        summary: 'Technical brief for academic health sciences faculty and staff explaining core large-language-model concepts, failure modes, evaluation needs, data-sensitivity boundaries, and implementation-aware governance considerations.',
        skills: ['AI governance', 'Technical AI literacy', 'Large language models', 'Model evaluation', 'Risk communication', 'Implementation planning'],
        audience: ['Faculty', 'Staff', 'Researchers', 'Technical staff', 'Administrators', 'AI governance committees'],
        strategic: 'Demonstrates the ability to bridge technical AI concepts and institutional decision-making. The artifact supports shared understanding among faculty users, technical staff, compliance stakeholders, and governance committees.',
        sourceFile: 'llm-technical-brief-resource.md',
        cleanFile: 'llm-technical-brief-resource.md',
        tags: ['LLM', 'Technical brief', 'AI literacy', 'Model evaluation', 'AI governance', 'Risk communication'],
        featured: false,
        confidential: false,
        liveUrl: 'https://datadrivenmed.github.io/LLM-Technical-Brief/',
        liveLabel: 'Launch resource',
        fullArtifactUrl: 'artifact.html?file=llm-technical-brief-resource.md&id=ai-22'
      },
      {
        id: 'ai-23',
        title: 'Agentic EHR Field Guide',
        category: 'ai-governance',
        role: 'Live public clinical AI governance and EHR-readiness field guide',
        summary: 'Governance and education field guide focused on agentic AI in EHR-adjacent environments, including autonomy, permissions, documentation, patient communication, billing, auditability, human review, and health-system partner approval boundaries.',
        skills: ['AI governance', 'Agentic EHR', 'Clinical AI governance', 'Patient safety', 'Workflow risk', 'Human review', 'Partner governance'],
        audience: ['Faculty', 'Staff', 'Clinical leaders', 'Program directors', 'Informatics', 'Compliance', 'AI governance committees', 'Clinical partners'],
        strategic: 'Demonstrates the ability to classify EHR-connected agentic AI as a high-governance domain. The artifact clarifies what can be prepared internally and what requires partner health-system approval, privacy review, security review, clinical validation, and auditability.',
        sourceFile: 'agentic-ehr-field-guide-resource.md',
        cleanFile: 'agentic-ehr-field-guide-resource.md',
        tags: ['Agentic EHR', 'Clinical AI', 'Patient safety', 'Partner governance', 'Workflow risk', 'AI governance'],
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
        role: 'Live public clinician AI literacy and safety education artifact',
        summary: 'Education artifact helping clinicians, faculty, and trainees understand appropriate and inappropriate uses of general-purpose conversational AI in healthcare-adjacent contexts, with emphasis on role boundaries, patient safety, uncertainty, and human review.',
        skills: ['AI governance', 'ChatGPT', 'Clinical AI literacy', 'Patient safety', 'Clinician education', 'Risk communication', 'Human review'],
        audience: ['Clinicians', 'Faculty', 'Residents', 'Fellows', 'Students', 'Medical educators', 'GME', 'AI governance committees'],
        strategic: 'Demonstrates the ability to convert public concern about general-purpose AI in medicine into a structured educational and governance resource for clinicians and faculty. The artifact makes safe-use boundaries visible without implying clinical deployment approval.',
        sourceFile: 'chatgpt-for-clinicians-resource.md',
        cleanFile: 'chatgpt-for-clinicians-resource.md',
        tags: ['ChatGPT', 'Clinicians', 'Clinical AI literacy', 'Patient safety', 'AI governance', 'Human review'],
        featured: true,
        confidential: false,
        liveUrl: 'https://datadrivenmed.github.io/ChatGPT-for-Clinicians/',
        liveLabel: 'Launch resource',
        fullArtifactUrl: 'artifact.html?file=chatgpt-for-clinicians-resource.md&id=ai-08'
      },
      {
        id: 'ai-24',
        title: 'Enterprise AI',
        category: 'ai-governance',
        role: 'Live public enterprise AI strategy and institutional governance artifact',
        summary: 'Strategy and governance artifact framing AI adoption as an enterprise operating model problem rather than a collection of disconnected tools. Covers governance, prioritization, data sensitivity, risk classification, workforce readiness, implementation boundaries, and evaluation.',
        skills: ['AI governance', 'Enterprise AI', 'Digital transformation', 'Operating model design', 'Institutional strategy', 'Risk management', 'Implementation planning'],
        audience: ['Dean', 'Senior leadership', 'Faculty', 'Staff', 'Administrators', 'Research leadership', 'AI governance committees'],
        strategic: 'Demonstrates the ability to connect AI literacy, institutional governance, operational strategy, and digital transformation. The artifact supports senior-level conversations about moving from scattered AI experimentation toward an enterprise AI operating model.',
        sourceFile: 'enterprise-ai-resource.md',
        cleanFile: 'enterprise-ai-resource.md',
        tags: ['Enterprise AI', 'Digital transformation', 'Operating model', 'AI governance', 'Institutional strategy'],
        featured: true,
        confidential: false,
        liveUrl: 'https://datadrivenmed.github.io/Enterprise-AI/',
        liveLabel: 'Launch resource',
        fullArtifactUrl: 'artifact.html?file=enterprise-ai-resource.md&id=ai-24'
      }
    ];

    items.forEach(upsert);

    window.FLAGSHIP_IDS = Array.isArray(window.FLAGSHIP_IDS) ? window.FLAGSHIP_IDS : [];
    ['ai-18', 'ai-19', 'ai-21', 'ai-23', 'ai-08', 'ai-24'].forEach(function (id) {
      if (window.FLAGSHIP_IDS.indexOf(id) < 0) window.FLAGSHIP_IDS.push(id);
    });

    if (Array.isArray(window.HERO_STATS)) {
      var stat = window.HERO_STATS.find(function (s) { return /Artifacts in capability portfolio/i.test(s.lbl || ''); });
      if (stat) stat.num = String(window.ARTIFACTS.length);
    }

    if (typeof window.applyEvidenceStatusMetadata === 'function') {
      window.applyEvidenceStatusMetadata(window.ARTIFACTS);
    }

    window.ALL_SKILLS = [].concat.apply([], window.ARTIFACTS.map(function (a) { return a.skills || []; }))
      .filter(function (v, i, arr) { return arr.indexOf(v) === i; })
      .sort();
    window.ALL_AUDIENCES = [].concat.apply([], window.ARTIFACTS.map(function (a) { return a.audience || []; }))
      .filter(function (v, i, arr) { return arr.indexOf(v) === i; })
      .sort();

    window.__AI_RESOURCES_FINAL_LOADED__ = true;
    return true;
  }

  if (!addArtifacts()) {
    var attempts = 0;
    var timer = setInterval(function () {
      attempts += 1;
      if (addArtifacts() || attempts > 120) clearInterval(timer);
    }, 50);
  }
})();
