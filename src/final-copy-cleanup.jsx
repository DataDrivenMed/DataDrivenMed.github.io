/* global window, React */
(function () {
  const BaseHome = window.HomePage;
  if (!BaseHome) return;

  function FinalCopyCleanup(props) {
    React.useEffect(() => {
      const deepGuide = document.querySelector('.read-guide-grid > div:nth-child(3) span');
      if (deepGuide) deepGuide.textContent = 'The Library opens to the complete record. Use Evidence Depth and the concise audience groups to focus quickly on the evidence most relevant to your review.';

      const libraryCta = document.querySelector('.triple-cta .cta-cell:nth-child(2) p');
      if (libraryCta) libraryCta.textContent = 'The Library contains the complete record. Use concise Evidence Depth and audience filters to focus on projects, governance, scholarship, funded work, credentials, and public tools.';
    }, []);
    return <BaseHome {...props} />;
  }

  window.HomePage = FinalCopyCleanup;
})();
