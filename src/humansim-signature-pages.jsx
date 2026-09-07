/* global window, React */
// Elevates HumanSim on the portfolio home page without changing the existing
// homepage, profile, navigation, or shared visual system.
(function () {
  "use strict";

  const BaseHomePage = window.HomePage;
  if (typeof BaseHomePage !== "function" || !window.React) return;

  function HumanSimSignatureHome(props) {
    const humanSim = (window.ARTIFACTS || []).find(a => a && a.id === "ev-humansim");

    return (
      <React.Fragment>
        <BaseHomePage {...props} />
        {humanSim && (
          <section style={{
            background: "var(--paper)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "44px 0"
          }}>
            <div className="container" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 30,
              alignItems: "center"
            }}>
              <div>
                <div className="eyebrow"><span className="dot"></span>Selected live work</div>
                <div style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginTop: 16
                }}>
                  Digital medical learning · Simulation innovation
                </div>
              </div>

              <div style={{ maxWidth: 780 }}>
                <h2 style={{ margin: 0, fontSize: "clamp(27px,3vw,40px)", lineHeight: 1.05 }}>
                  HumanSim — Living Visual Medical Knowledge Network
                </h2>
                <p style={{
                  margin: "16px 0 0",
                  maxWidth: "66ch",
                  fontSize: 15,
                  lineHeight: 1.72,
                  color: "var(--muted)"
                }}>
                  A patient-anchored medical-learning system connecting foundational science, disease, compensation, interventions, and clinical response in one visual model—so learners can move from patient to mechanism or mechanism back to patient.
                </p>
                <div style={{
                  marginTop: 15,
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  lineHeight: 1.55,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--gold)"
                }}>
                  Patient → mechanism → compensation → intervention → response
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
                  <a className="btn gold" href={humanSim.liveUrl} target="_blank" rel="noopener noreferrer">
                    Explore HumanSim <window.ArrowRight size={13} />
                  </a>
                  {props.openArtifact && (
                    <button type="button" className="btn outline" onClick={() => props.openArtifact(humanSim)}>
                      View evidence record
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }

  window.HomePage = HumanSimSignatureHome;
})();
