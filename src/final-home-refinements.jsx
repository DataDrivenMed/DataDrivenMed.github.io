/* global window, React */
(function () {
  const { useEffect } = React;
  const BaseHomePage = window.HomePage;
  const BaseAboutPage = window.AboutPage;

  function RefinedHomePage(props) {
    useEffect(() => {
      const headline = document.querySelector('.hero-dark .hero-copy h1');
      if (headline) headline.style.fontSize = 'clamp(2.45rem, 5.2vw, 4.85rem)';

      const cells = document.querySelectorAll('.proof-strip .proof-cell');
      if (cells.length >= 4) {
        const num = cells[3].querySelector('.proof-num');
        const lbl = cells[3].querySelector('.proof-lbl');
        if (num) num.textContent = 'Sports';
        if (lbl) lbl.textContent = 'International competitive swimming background; seven-year state team captain';
      }

      document.querySelectorAll('p').forEach(p => {
        if (p.textContent && p.textContent.includes('Before the institutional strategy work, Ram competed internationally in swimming and represented India')) {
          p.textContent = 'A long-standing competitive swimming background adds a distinct performance perspective to the broader leadership profile, later extended through swimming science, analytics, anti-doping service, and public scholarship.';
        }
      });
    }, []);
    return <BaseHomePage {...props} />;
  }

  function RefinedAboutPage(props) {
    useEffect(() => {
      document.querySelectorAll('.about-bio').forEach(p => {
        if (p.textContent) p.textContent = p.textContent.replace('A distinctive parallel thread is a former international swimming career representing India, followed by sustained work in swimming science, analytics, and public scholarship.', 'A distinctive parallel thread is a long-standing competitive swimming background, followed by sustained work in swimming science, analytics, and public scholarship.');
      });
      document.querySelectorAll('.role-strip .pill').forEach(el => {
        if (el.textContent && el.textContent.includes('International swimmer')) el.textContent = 'Competitive swimming';
      });
    }, []);
    return <BaseAboutPage {...props} />;
  }

  window.HomePage = RefinedHomePage;
  window.AboutPage = RefinedAboutPage;
})();
