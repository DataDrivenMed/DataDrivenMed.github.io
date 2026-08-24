/* global window, React */
(function () {
  const { useMemo, useState } = React;

  const SIGNATURES = [
    {
      key: 'strategy',
      num: '01',
      label: 'Strategy to Execution',
      artifactId: 'execstrat-01',
      question: 'How can a medical school turn a strategic plan into a measurable institutional operating cycle?',
      operating: 'Environmental and institutional evidence, stakeholder interpretation, priority architecture, KPI design, implementation governance, annual monitoring and CQI feedback.',
      evidence: 'One operating cycle links planning, implementation, leadership review, annual monitoring and CQI.',
      proof: 'Planning · implementation · annual monitoring · CQI'
    },
    {
      key: 'accreditation',
      num: '02',
      label: 'Accreditation Intelligence',
      artifactId: 'ev-acgme-predictive',
      question: 'How can accreditation vulnerability be identified early enough for leadership to intervene before formal review?',
      operating: 'Longitudinal program, survey, citation and outcome evidence is translated into risk signals, likely citation domains and targeted corrective action.',
      evidence: 'Predictive surveillance converts historical accreditation signals into likely citation domains and targeted corrective action.',
      proof: 'Longitudinal evidence · risk surveillance · targeted intervention'
    },
    {
      key: 'data',
      num: '03',
      label: 'Admissions-to-Practice',
      artifactId: 'ev-lifecycle-data-architecture',
      question: 'How can leaders understand the full medical-education lifecycle instead of relying on disconnected annual reports?',
      operating: 'Governed data architecture connects admissions, UME, learner outcomes, match, GME, physician practice and workforce outcomes across cohorts.',
      evidence: 'A lifecycle architecture connects admissions decisions with education, match, residency, practice and workforce outcomes.',
      proof: 'Admissions · education · match · GME · practice · workforce'
    },
    {
      key: 'gme',
      num: '04',
      label: 'GME Finance and Workforce',
      artifactId: 'gme-09',
      question: 'How can complex GME financing and affiliation assumptions be translated into decision-ready scenarios?',
      operating: 'Payment assumptions, trainee movement, cap position, affiliation structures and workforce implications are modeled in an interactive executive decision tool.',
      evidence: 'An interactive simulator turns cap position, trainee movement and payment assumptions into affiliation and workforce scenarios.',
      proof: 'GME finance · scenario modeling · affiliation strategy'
    },
    {
      key: 'medai',
      num: '05',
      label: 'Responsible AI and MedAI',
      artifactId: 'ai-01',
      question: 'How can an academic health sciences institution pair responsible AI governance with practical faculty and learner education?',
      operating: 'School-level policy and governance are connected with a public learning system that builds shared vocabulary, educator support, self-assessment and applied AI fluency.',
      evidence: 'A School-level governance framework is paired with public resources for shared vocabulary, educator use and applied AI fluency.',
      proof: 'Policy · governance · Lexicon · teaching support · external selection',
      special: 'medai'
    },
    {
      key: 'pan-oncology',
      num: '06',
      label: 'Pan-Oncology Clinical AI',
      artifactId: 'ev-pan-oncology',
      question: 'What would a governed multi-agent tumor-board research prototype require before clinical validation?',
      operating: 'Structured case intake, provenance-aware evidence review, specialist agents, an independent Clinical Red Team, abstention, human attestation and an audit trace.',
      evidence: 'The prototype separates governed AI architecture from clinical validation through provenance, independent challenge, abstention and human attestation.',
      proof: 'Provenance · red-team review · abstention · human oversight'
    },
    {
      key: 'rural-policy',
      num: '07',
      label: 'Rural Health and Public Policy',
      artifactId: 'pol-12',
      question: 'How can federal rural-health policy be translated into state implementation choices and an institutional partnership strategy?',
      operating: 'Federal policy, Medicaid exposure, workforce, rural access, technology, hospital sustainability and LSU-LDH implementation roles are assessed together.',
      evidence: 'A policy stress test links federal reform with Louisiana Medicaid exposure, workforce, rural access and institutional partnership choices.',
      proof: 'Federal policy · Louisiana strategy · implementation readiness'
    }
  ];

  function recordType(a) {
    if (a.evidenceType) return a.evidenceType;
    const id = String(a.id || '');
    const t = [a.title, a.role, a.summary].join(' ').toLowerCase();
    if (/^ev-(pub|poster|oral|reviewer|mec-report)-/.test(id) || /publication|poster presentation|oral presentation|manuscript reviewer/.test(t)) return 'scholarship';
    if (/^ev-(credential|award)-/.test(id) || /degree|certification|award|honor/.test(t)) return 'credentials';
    if (/grant|funded|co-principal|co-pi/.test(t) || /wisewoman|adapt-pol|steps|medtronic|nih-mdphd|nsf/.test(id)) return 'funded';
    if (/committee|commission|governance|steering|advisory|professional service|doping control/.test(t)) return 'governance';
    if (a.liveUrl || /public guide|interactive|dashboard|field guide|resource hub/.test(t)) return 'public';
    return 'projects';
  }

  const GROUPS = [
    ['executive', 'Executive & institutional leadership', ['dean','chancellor','senior leadership','executive','leadership','board','vice chancellor','associate dean']],
    ['academic', 'Academic affairs & accreditation', ['accredit','lcme','acgme','accme','cme','academic affairs','institutional effectiveness','cqi']],
    ['gme', 'GME & health-system partners', ['gme','program director','resident','fellow','hospital','health system','umc','lcmc','ochsner','olol','clinical partner']],
    ['education', 'Faculty, learners & education', ['faculty','student','learner','admissions','ume','curriculum','education','teaching','trainee']],
    ['research', 'Research, cancer & innovation', ['research','cancer','nih','nci','investigator','scientist','innovation','clinical trials']],
    ['operations', 'Finance, operations & technology', ['finance','financial','contracts','operations','facilities','technology','informatics','accounting','vendor']],
    ['policy', 'Government, policy & community', ['ldh','dhh','state','legisl','government','policy','community','rural','workforce','medicaid','cms','public health']],
    ['external', 'External, professional & public', ['external','public','professional','conference','journal','reviewer','coach','swim','international','collaborator']]
  ];

  function audMatch(a, id) {
    if (id === 'all') return true;
    const g = GROUPS.find(x => x[0] === id);
    const hay = (a.audience || []).join(' ').toLowerCase();
    return g ? g[2].some(k => hay.includes(k)) : true;
  }

  function LibraryPage({ openArtifact }) {
    const initial = useMemo(() => {
      const p = new URLSearchParams(window.location.hash.split('?')[1] || '');
      return { cat: p.get('cat') || 'all', featured: p.get('featured') === '1', depth: 'all' };
    }, []);
    const [cat, setCat] = useState(initial.cat);
    const [aud, setAud] = useState('all');
    const [featured, setFeatured] = useState(initial.featured);
    const [confid, setConfid] = useState(false);
    const [q, setQ] = useState('');
    const [view, setView] = useState('index');
    const [depth, setDepth] = useState(initial.depth);
    const [signatureKey, setSignatureKey] = useState('strategy');
    const all = window.ARTIFACTS || [];

    const artifactById = id => all.find(a => a.id === id);
    const signature = SIGNATURES.find(item => item.key === signatureKey) || SIGNATURES[0];
    const signatureArtifact = artifactById(signature.artifactId);
    const medaiLexicon = artifactById('ai-05');
    const medaiTeachingGuide = artifactById('ai-06');

    const filtered = useMemo(() => all.filter(a => {
      if (depth !== 'all' && recordType(a) !== depth) return false;
      if (cat !== 'all' && a.category !== cat) return false;
      if (!audMatch(a, aud)) return false;
      if (featured && !a.featured) return false;
      if (confid && !a.confidential) return false;
      if (q) {
        const n = q.toLowerCase();
        const h = [a.title,a.summary,a.strategic,a.role].concat(a.tags||[],a.skills||[],a.audience||[]).join(' ').toLowerCase();
        if (!h.includes(n)) return false;
      }
      return true;
    }), [cat,aud,featured,confid,q,depth,all.length]);

    const grouped = useMemo(() => {
      const g = new Map();
      filtered.forEach(a => { const x = g.get(a.category) || []; x.push(a); g.set(a.category,x); });
      return g;
    }, [filtered]);

    const codes = useMemo(() => {
      const m = new Map();
      window.CAPABILITIES.forEach(c => all.filter(a => a.category === c.id).forEach((a,i) => m.set(a.id,c.num+'.'+String(i+1).padStart(2,'0'))));
      return m;
    }, [all.length]);

    const counts = useMemo(() => {
      const d = {}; ['projects','governance','scholarship','funded','credentials','public'].forEach(k => d[k] = all.filter(a => recordType(a) === k).length);
      const a = {}; GROUPS.forEach(g => a[g[0]] = all.filter(x => audMatch(x,g[0])).length);
      return { d, a };
    }, [all.length]);

    const reset = () => { setCat('all'); setAud('all'); setFeatured(false); setConfid(false); setQ(''); setDepth('all'); };

    return <main className="page-enter">
      <div className="lib-dark-header"><div className="container">
        <div className="eyebrow" style={{color:'var(--gold)'}}><span className="dot" style={{background:'var(--gold)'}}></span>Evidence Library · {all.length} records indexed</div>
        <h1>The evidence<br/>library.</h1>
        <p>A career evidence register across twelve capability areas. Start with the selected signature work, then use the complete record and filters below for the full depth of evidence.</p>
      </div></div>

      <section className="signature-library-section"><div className="container">
        <div className="signature-library-intro">
          <div><span>Selected signature work</span><h2>Seven institutional dossiers.</h2></div>
          <p>A guided entry point for reviewers who want to understand the strongest work before opening the complete evidence register.</p>
        </div>

        <div className={'signature-dossier-shell'+(signature.special === 'medai' ? ' medai-expanded' : '')}>
          <div className="signature-dossier-rail" role="tablist" aria-label="Selected signature work">
            <div className="signature-dossier-rail-label">Signature evidence</div>
            {SIGNATURES.map(item => <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={signature.key === item.key}
              className={signature.key === item.key ? 'active' : ''}
              onClick={() => setSignatureKey(item.key)}
            ><span>{item.num}</span><strong>{item.label}</strong></button>)}
          </div>

          <article className="signature-dossier-panel" role="tabpanel">
            <div className="signature-dossier-kicker">{signature.num} · {signature.label}</div>
            <h2>{signatureArtifact ? signatureArtifact.title : signature.label}</h2>

            <div className="signature-dossier-fields">
              <div><span>Institutional question</span><p>{signature.question}</p></div>
              <div><span>Role</span><p>{signatureArtifact ? signatureArtifact.role : ''}</p></div>
              <div><span>Operating model</span><p>{signature.operating}</p></div>
              <div><span>Evidence</span><p>{signature.evidence}</p></div>
            </div>

            {signature.special === 'medai' && <div className="medai-dossier">
              <div className="medai-dossier-heading"><span>MedAI education system</span><p>Public learning resources that connect AI terminology with educator support and institutional governance.</p></div>
              <div className="medai-resource-grid">
                <div className="medai-resource-card">
                  <span>Live educational resource</span>
                  <h3>MedAI Lexicon</h3>
                  <p>Plain-language explanations of 30+ AI concepts for physicians, basic science researchers and clinical researchers.</p>
                  <a href="https://datadrivenmed.github.io/MedAI--Lexicon/" target="_blank" rel="noopener noreferrer">Launch Lexicon ↗</a>
                </div>
                <div className="medai-resource-card">
                  <span>Educator companion</span>
                  <h3>MedAI Teaching Guide</h3>
                  <p>Twenty-nine concepts across five curriculum categories, with dual-lens definitions, why-to-teach guidance and practical teaching approaches.</p>
                  {medaiTeachingGuide && <button type="button" onClick={() => openArtifact(medaiTeachingGuide)}>Open teaching guide record →</button>}
                </div>
              </div>
              <div className="medai-external-evidence">
                <span>External educational selection</span>
                <p>The MedAI learning system has been selected and listed by medical-school education teams beyond LSU.</p>
                <div>
                  <a href="https://yppsweb2.its.yale.edu/yalemessage/pages/ad2862/22202630518/" target="_blank" rel="noopener noreferrer"><strong>Yale School of Medicine</strong><small>Educational Technology &amp; Innovation newsletter · January 2026 · Lexicon and MicroModules listed under Learning Links</small></a>
                  <a href="https://med.und.edu/education-training/learning-innovation/repository.html" target="_blank" rel="noopener noreferrer"><strong>University of North Dakota SMHS</strong><small>Teaching &amp; Learning Resource Repository · Lexicon, Fluency Self-Assessment and MicroModules listed as AI resources</small></a>
                </div>
              </div>
            </div>}

            <div className="signature-proof-line"><span>Proof line</span><strong>{signature.proof}</strong></div>
            <div className="signature-dossier-actions">
              {signatureArtifact && <button type="button" onClick={() => openArtifact(signatureArtifact)}>Open full artifact →</button>}
              {signatureArtifact && signatureArtifact.liveUrl && <a href={signatureArtifact.liveUrl} target="_blank" rel="noopener noreferrer">{signatureArtifact.liveLabel || 'Launch live work'} ↗</a>}
              {signature.special === 'medai' && medaiLexicon && <button type="button" className="secondary" onClick={() => openArtifact(medaiLexicon)}>Open Lexicon record</button>}
            </div>
          </article>
        </div>

        <button
          type="button"
          className="signature-register-cue"
          onClick={() => document.getElementById('complete-evidence-register')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          <span>Beyond the signature work</span>
          <strong>Browse the complete evidence register: {all.length} records across {window.CAPABILITIES.length} capabilities ↓</strong>
        </button>
      </div></section>

      <div className="lib-body" id="complete-evidence-register"><div className="container">
        <div className="complete-register-heading"><div><span>Complete evidence register</span><h2>All {all.length} records.</h2></div><p>The signature dossiers are a guided entry point. The complete record below remains the source register.</p></div>
        <div className="library-filter-guide">
          <span>ⓘ</span>
          <div><strong>Complete record is the default.</strong> Narrow it by evidence type, capability, or audience group only when needed.</div>
        </div>
        <div className="ev-search"><window.SearchIcon size={17}/><input placeholder="Search: strategic planning, LCME, GME caps, MedAI, Pan-Oncology, NIH, rural health..." value={q} onChange={e => {setQ(e.target.value); if(e.target.value) setDepth('all');}}/>{q && <button className="ev-clear" onClick={()=>setQ('')}>×</button>}</div>
        <div className="ev-toolbar"><div className="ev-tools-left">
          <select className="ev-select" value={depth} onChange={e=>setDepth(e.target.value)} aria-label="Evidence type">
            <option value="all">Complete record · {all.length}</option>
            <option value="projects">Projects &amp; initiatives · {counts.d.projects}</option>
            <option value="governance">Governance &amp; service · {counts.d.governance}</option>
            <option value="scholarship">Scholarship &amp; presentations · {counts.d.scholarship}</option>
            <option value="funded">Grants &amp; funded work · {counts.d.funded}</option>
            <option value="credentials">Credentials &amp; recognition · {counts.d.credentials}</option>
            <option value="public">Public tools &amp; resources · {counts.d.public}</option>
          </select>
          <select className="ev-select" value={cat} onChange={e=>setCat(e.target.value)}><option value="all">All capabilities · {all.length}</option>{window.CAPABILITIES.map(c => <option key={c.id} value={c.id}>{c.num} · {c.title} · {all.filter(a=>a.category===c.id).length}</option>)}</select>
          <select className="ev-select" value={aud} onChange={e=>setAud(e.target.value)} aria-label="Audience group"><option value="all">All audience groups</option>{GROUPS.map(g => <option key={g[0]} value={g[0]}>{g[1]} · {counts.a[g[0]]}</option>)}</select>
          <button className={'ev-flag '+(featured?'active':'')} onClick={()=>setFeatured(!featured)}><span className="dot featured"></span> Featured</button>
          <button className={'ev-flag '+(confid?'active':'')} onClick={()=>setConfid(!confid)}><span className="dot confid"></span> Confidential</button>
          {(cat!=='all'||aud!=='all'||featured||confid||q||depth!=='all') && <button className="ev-reset" onClick={reset}>Reset</button>}
        </div><div className="ev-tools-right"><span className="ev-count">{filtered.length} / {all.length}</span><div className="ev-view"><button className={view==='index'?'active':''} onClick={()=>setView('index')}>Index</button><button className={view==='cards'?'active':''} onClick={()=>setView('cards')}>Cards</button></div></div></div>
        {filtered.length===0 ? <div className="empty" style={{marginTop:48}}>No evidence records match these filters. Try resetting or broadening the search.</div> : view==='cards' ? <div className="lib-grid">{filtered.map(a=><window.ArtifactCard key={a.id} a={a} onOpen={openArtifact}/>)}</div> : <div className="ev-index">
          <div className="ev-row ev-head"><div className="ev-c-code">Code</div><div className="ev-c-title">Title</div><div className="ev-c-skills">Skills Demonstrated</div><div className="ev-c-aud">Audience</div><div className="ev-c-flags">Status</div></div>
          {window.CAPABILITIES.map(c => { const arts=grouped.get(c.id); if(!arts||!arts.length) return null; return <React.Fragment key={c.id}><div className="ev-group"><span className="ev-g-num">{c.num}</span><span className="ev-g-title">{c.title}</span><span className="ev-g-count">{arts.length}</span></div>{arts.map(a=><button key={a.id} className="ev-row ev-item" onClick={()=>openArtifact(a)}><div className="ev-c-code">{codes.get(a.id)}</div><div className="ev-c-title"><span className="t">{a.title}</span><span className="s">{a.summary}</span></div><div className="ev-c-skills">{(a.skills||[]).slice(0,3).map(s=><span key={s} className="tag">{s}</span>)}{(a.skills||[]).length>3&&<span className="tag-more">+{a.skills.length-3}</span>}</div><div className="ev-c-aud">{(a.audience||[]).slice(0,2).join(' · ')}</div><div className="ev-c-flags">{SIGNATURES.some(sig => sig.artifactId === a.id) && <span className="status-chip tiny signature">Signature</span>}{(a.statusLabels||[]).slice(0,1).map(s=><span key={s.key+s.label} className={'status-chip tiny '+s.key}>{s.label}</span>)}<window.ArrowRight size={12}/></div></button>)}</React.Fragment>; })}
        </div>}
      </div></div>
    </main>;
  }

  window.LibraryPage = LibraryPage;
})();
