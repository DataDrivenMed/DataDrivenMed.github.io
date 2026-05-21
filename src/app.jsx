/* global window, React, ReactDOM */
// =============================================================
// app.jsx - root router + mount
// v24: FIX 3 — added /framework route for FrameworkPage
// =============================================================
const { useState: useStateA, useEffect: useEffectA } = React;
function App() {
  const route = window.useRoute();
  const [activeArt, setActiveArt] = useStateA(null);
  // Expose for cross-detail navigation
  useEffectA(() => {
    window.__openArtifact = setActiveArt;
  }, []);
  // Strip query/anchor portion for top-level page match
  const base = route.split("?")[0].split("#")[0];
  let page;
  if (base === "/" || base === "") page = <window.HomePage openArtifact={setActiveArt} />;
  else if (base.startsWith("/about")) page = <window.AboutPage />;
  else if (base.startsWith("/career-governance")) page = <window.CareerGovernancePage />;
  else if (base.startsWith("/capabilities")) page = <window.CapabilitiesPage />;
  else if (base.startsWith("/library")) page = <window.LibraryPage openArtifact={setActiveArt} />;
  else if (base.startsWith("/case-studies")) page = <window.CaseStudiesPage openArtifact={setActiveArt} />;
  else if (base.startsWith("/ask")) page = <window.AskPage />;
  else if (base.startsWith("/truth-layer")) page = <window.TruthLayerPage />;
  else if (base.startsWith("/claims-evidence")) page = <window.ClaimsEvidencePage />;
  else if (base.startsWith("/framework")) page = <window.FrameworkPage />;  // FIX 3
  else page = <window.HomePage openArtifact={setActiveArt} />;
  return (
    <div className="shell">
      <window.TopBar route={base} />
      {page}
      <window.Footer />
      {activeArt && <window.ArtifactDetail artifact={activeArt} onClose={() => setActiveArt(null)} />}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
