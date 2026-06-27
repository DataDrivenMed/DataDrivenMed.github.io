(function(){
  function add(){
    if(!Array.isArray(window.ARTIFACTS)||window.ARTIFACTS.length<50)return false;
    var c={id:'ai-amc-guide',title:'AI-Aware AMC Guide',category:'ai-governance',role:'Featured interactive governance artifact',summary:'Interactive academic medical center guide.',skills:['AI governance','Workforce strategy','Interactive guide'],audience:['Dean','Senior leadership'],strategic:'Practical responsible AI process artifact.',sourceFile:'AI-Aware AMC Guide',tags:['AI governance','Academic medical centers'],featured:true,confidential:false,cleanFile:null,fullArtifactUrl:null,liveUrl:'https://datadrivenmed.github.io/AI-Aware-Hiring-Guide/',liveLabel:'Launch guide'};
    var i=window.ARTIFACTS.findIndex(function(x){return x&&x.id===c.id;});
    if(i>=0)window.ARTIFACTS[i]=c;else window.ARTIFACTS.push(c);
    window.FLAGSHIP_IDS=Array.isArray(window.FLAGSHIP_IDS)?window.FLAGSHIP_IDS:[];
    if(window.FLAGSHIP_IDS.indexOf(c.id)<0)window.FLAGSHIP_IDS.push(c.id);
    if(typeof window.applyEvidenceStatusMetadata==='function')window.applyEvidenceStatusMetadata(window.ARTIFACTS);
    return true;
  }
  if(!add()){var n=0,t=setInterval(function(){n++;if(add()||n>100)clearInterval(t);},100);}
})();
