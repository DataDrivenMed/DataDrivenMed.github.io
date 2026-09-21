/* global window, React */
(function(){
  const {useMemo,useState}=React;
  const LABELS={
    "executive-strategy":"Strategy & Institutional Effectiveness",
    "accreditation-cqi":"Accreditation, CQI & Governance",
    "ai-governance":"AI Governance & Digital Transformation",
    "analytics":"Analytics, Data Architecture & Decision Intelligence",
    "gme-finance":"GME Finance, Contracts & Academic Health Systems",
    "research-strategy":"Research, Cancer & Innovation Strategy",
    "admissions-ume":"Admissions, UME & Student Outcomes",
    "policy-rural":"Louisiana Workforce, Rural Health & Public Policy",
    "faculty-affairs":"Faculty Affairs & Institutional Culture",
    "simulation-quality":"Simulation, Patient Safety & Clinical Quality",
    "swimming-science":"Swimming Science & External Thought Leadership",
    "recognition":"Scholarship, Recognition & Professional Contributions"
  };
  function text(a){return [a.title,a.role,a.summary,a.strategic,(a.skills||[]).join(' '),(a.audience||[]).join(' ')].join(' ').toLowerCase();}
  function typeOf(a){
    if(!(a.premiumEvidence||a.normalizedRecord)) return 'baseline';
    if(a.evidenceLevel==='distinct-output' || a.category==='recognition') return 'scholarship';
    return 'normalized';
  }
  function LibraryDepth({openArtifact}){
    const artifacts=window.ARTIFACTS||[];
    const [q,setQ]=useState('');
    const [cat,setCat]=useState('all');
    const [kind,setKind]=useState('all');
    const counts=useMemo(()=>{const c={};artifacts.forEach(a=>{c[a.category]=(c[a.category]||0)+1});return c},[artifacts.length]);
    const filtered=useMemo(()=>{
      const needle=q.trim().toLowerCase();
      return artifacts.filter(a=>{
        if(cat!=='all'&&a.category!==cat)return false;
        if(kind!=='all'&&typeOf(a)!==kind)return false;
        return !needle||text(a).includes(needle);
      }).sort((a,b)=>String(a.title||'').localeCompare(String(b.title||'')));
    },[artifacts.length,q,cat,kind]);
    const baseline=(window.PREMIUM_BASELINE_RECORD_COUNT||97);
    const added=Math.max(0,artifacts.length-baseline);
    return <main className="premium-page">
      <section className="premium-page-hero"><div className="container">
        <span className="premium-kicker">Comprehensive evidence library</span>
        <h1>Every substantive strand remains discoverable.</h1>
        <p>This review build follows a preservation-first rule: existing records remain, distinct projects and outputs are surfaced separately, and potential parent/child overlap is not deleted without explicit review.</p>
        <div className="premium-stat-grid" style={{marginTop:'24px'}}>
          <div className="premium-stat"><strong>{artifacts.length}</strong><span>total evidence records</span><small>current premium runtime</small></div>
          <div className="premium-stat"><strong>{baseline}</strong><span>preserved baseline</span><small>original live portfolio</small></div>
          <div className="premium-stat"><strong>{added}</strong><span>added above baseline</span><small>normalized / newly surfaced</small></div>
          <div className="premium-stat"><strong>{Object.keys(counts).length}</strong><span>evidence domains</span><small>breadth with searchable depth</small></div>
        </div>
      </div></section>
      <section className="container" style={{paddingTop:'28px',paddingBottom:'70px'}}>
        <div className="premium-review-banner" style={{marginBottom:'20px'}}><div className="container" style={{padding:'12px 0'}}><strong>No-deletion mode</strong><span>Nothing is removed merely because another record looks similar.</span></div></div>
        <div className="library-controls" style={{display:'grid',gridTemplateColumns:'minmax(240px,1fr) 280px 220px',gap:'12px',marginBottom:'18px'}}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search title, role, method, audience, topic…" style={{padding:'13px 14px',border:'1px solid #d8d2c8',borderRadius:'8px',font:'inherit'}} />
          <select value={cat} onChange={e=>setCat(e.target.value)} style={{padding:'13px 12px',border:'1px solid #d8d2c8',borderRadius:'8px',font:'inherit'}}><option value="all">All domains</option>{Object.keys(LABELS).filter(k=>counts[k]).map(k=><option key={k} value={k}>{LABELS[k]} ({counts[k]})</option>)}</select>
          <select value={kind} onChange={e=>setKind(e.target.value)} style={{padding:'13px 12px',border:'1px solid #d8d2c8',borderRadius:'8px',font:'inherit'}}><option value="all">All evidence types</option><option value="baseline">Preserved baseline</option><option value="normalized">Normalized projects</option><option value="scholarship">Scholarship / service / credentials</option></select>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',gap:'16px',alignItems:'baseline',margin:'10px 0 16px'}}><h2 style={{margin:0}}>{filtered.length} records</h2><span style={{color:'#6b665f',fontSize:'13px'}}>Searchable evidence; case-study selection does not affect retention.</span></div>
        <div className="evidence-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'12px'}}>
          {filtered.map(a=><article key={a.id} className="evidence-card" style={{background:'#fff',border:'1px solid #ddd8cf',borderRadius:'10px',padding:'16px',display:'flex',flexDirection:'column',minHeight:'190px'}}>
            <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'10px'}}><span style={{fontSize:'10px',letterSpacing:'.08em',textTransform:'uppercase',border:'1px solid #ddd8cf',borderRadius:'999px',padding:'4px 7px'}}>{LABELS[a.category]||a.category||'Evidence'}</span>{(a.premiumEvidence||a.normalizedRecord)&&<span style={{fontSize:'10px',letterSpacing:'.08em',textTransform:'uppercase',background:'#171717',color:'#fff',borderRadius:'999px',padding:'4px 7px'}}>{typeOf(a)==='scholarship'?'Distinct output':'Normalized'}</span>}</div>
            <h3 style={{fontSize:'17px',lineHeight:1.25,margin:'0 0 8px'}}>{a.title}</h3>
            {a.role&&<div style={{fontSize:'12px',fontWeight:600,marginBottom:'8px'}}>{a.role}</div>}
            <p style={{fontSize:'13px',lineHeight:1.45,color:'#56514b',margin:'0 0 14px'}}>{a.summary}</p>
            <button type="button" onClick={()=>openArtifact&&openArtifact(a)} style={{marginTop:'auto',alignSelf:'flex-start',border:0,background:'transparent',padding:0,fontWeight:600,cursor:'pointer'}}>Open evidence →</button>
          </article>)}
        </div>
      </section>
    </main>;
  }
  window.LibraryPage=LibraryDepth;
})();