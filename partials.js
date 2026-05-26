/* ============================================================
   Affinity Group — Shared Header + Footer Injection
   ============================================================ */

(function () {
  'use strict';

  /* ---- HEADER HTML ---- */
  var headerHTML = `
<header id="site-header">
  <div class="nav-inner">
    <!-- Logo -->
    <a class="nav-logo" href="index.html">
      <img src="Resources/HomePage/TheAffinityGroupLogo.jpeg" alt="The Affinity Group" />
    </a>

    <!-- Center Navigation -->
    <ul class="nav-links">

      <!-- SERVICES -->
      <li class="has-dropdown">
        <a href="#">SERVICES <span class="caret">&#9660;</span></a>
        <div class="dropdown">
          <div class="dropdown-grid">
            <div class="dropdown-col">
              <h5>Services for Individuals</h5>
              <a href="total-wealth-management.html">Total Wealth Management</a>
              <a href="investment-management.html">Investment Management</a>
              <a href="real-estate.html">Real Estate Investing</a>
              <a href="insurance.html">Life &amp; Disability Insurance</a>
              <a href="estate-planning.html">Estate Planning</a>
              <a href="tax-planning.html">Tax Planning</a>
            </div>
            <div class="dropdown-col">
              <h5>Services for Businesses</h5>
              <a href="outsourced-cfo.html">Outsourced CFO</a>
              <a href="business-owners.html">Business Owners</a>
              <a href="investment-management.html">Investment Management</a>
              <a href="401k-retirement.html">401k / Retirement</a>
            </div>
          </div>
        </div>
      </li>

      <!-- ABOUT US -->
      <li class="has-dropdown">
        <a href="#">ABOUT US <span class="caret">&#9660;</span></a>
        <div class="dropdown single-col">
          <a href="our-team.html">Our Team</a>
          <a href="faqs.html">FAQs</a>
        </div>
      </li>

      <!-- CONTACT -->
      <li>
        <a href="contact.html">CONTACT</a>
      </li>

      <!-- MEDIA -->
      <li class="has-dropdown">
        <a href="#">MEDIA <span class="caret">&#9660;</span></a>
        <div class="dropdown single-col">
          <a href="videos.html">Videos</a>
          <a href="fiduciary-vs-broker.html">Fiduciary vs. Broker</a>
          <a href="emoney.html">eMoney &mdash; Your Financial GPS</a>
        </div>
      </li>

    </ul>

    <!-- Right Side -->
    <div class="nav-right">
      <span class="nav-phone">(330) 526-8412</span>
      <a href="https://wealth.emaplan.com/ema/SignIn?ema%2fria%2ftagplanning" target="_blank" rel="noopener" class="btn btn-gold nav-portal">Total Wealth Management Portal</a>
      <a href="careers.html" class="nav-careers">Careers</a>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<!-- Mobile Navigation -->
<nav class="mobile-nav" id="mobile-nav">
  <div class="mobile-section-title">Services for Individuals</div>
  <a href="total-wealth-management.html">Total Wealth Management</a>
  <a href="investment-management.html">Investment Management</a>
  <a href="real-estate.html">Real Estate Investing</a>
  <a href="insurance.html">Life &amp; Disability Insurance</a>
  <a href="estate-planning.html">Estate Planning</a>
  <a href="tax-planning.html">Tax Planning</a>

  <div class="mobile-section-title">Services for Businesses</div>
  <a href="outsourced-cfo.html">Outsourced CFO</a>
  <a href="business-owners.html">Business Owners</a>
  <a href="401k-retirement.html">401k / Retirement</a>

  <div class="mobile-section-title">About Us</div>
  <a href="our-team.html">Our Team</a>
  <a href="faqs.html">FAQs</a>

  <div class="mobile-section-title">Media</div>
  <a href="videos.html">Videos</a>
  <a href="fiduciary-vs-broker.html">Fiduciary vs. Broker</a>
  <a href="emoney.html">eMoney &mdash; Your Financial GPS</a>

  <a href="contact.html">Contact</a>
  <a href="careers.html">Careers</a>

  <a class="mobile-phone" href="tel:3305268412">(330) 526-8412</a>
  <a href="https://wealth.emaplan.com/ema/SignIn?ema%2fria%2ftagplanning" target="_blank" rel="noopener" style="display:inline-block;margin-top:16px;" class="btn btn-gold">Total Wealth Management Portal</a>
</nav>
`;

  /* ---- FOOTER HTML ---- */
  var footerHTML = `
<footer id="site-footer">
  <div class="container">
    <div class="footer-top">

      <!-- Info Column -->
      <div>
        <div class="footer-logo">
          <img src="Resources/HomePage/TheAffinityGroupLogo.jpeg" alt="The Affinity Group" />
        </div>
        <p>4481 Munson St NW Ste 302<br>Canton, OH 44718</p>
        <p style="margin-top:0.5rem;">
          Affinity Wealth LLC is a Registered Investment Advisor and provides financial-planning services.
          Affinity Private Tax provides tax planning and tax preparation to select clients.
          Affinity Insurance Strategies LLC is a licensed Insurance Agency and works closely with Affinity Wealth LLC to provide services to our clients.
          Affinity Wealth LLC does not directly offer legal advice.
        </p>
        <!-- Social Media -->
        <div class="footer-social">
          <a href="https://www.facebook.com/TAGplanning" target="_blank" rel="noopener" class="social-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/the-affinity-group-ltd/" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.youtube.com/channel/UCEWvjYuO47uzLSznDZrn4bA" target="_blank" rel="noopener" class="social-icon" aria-label="YouTube">
            <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
          </a>
        </div>
        <!-- Legal Doc Links -->
        <div class="footer-legal-links" style="margin-top:1.2rem;">
          <a href="Resources/HomePage/PrivacyPolicy.pdf" target="_blank">Privacy Policy</a>
          <a href="Resources/HomePage/CRS.pdf" target="_blank">CRS</a>
          <a href="Resources/HomePage/ADV.pdf" target="_blank">ADV</a>
        </div>
      </div>

      <!-- Site Map Column 1 -->
      <div class="footer-links-col">
        <h5>Services</h5>
        <a href="total-wealth-management.html">Total Wealth Management</a>
        <a href="real-estate.html">Real Estate Investing</a>
        <a href="investment-management.html">Investment Management</a>
        <a href="insurance.html">Insurance</a>
        <a href="estate-planning.html">Estate Planning</a>
        <a href="tax-planning.html">Tax Planning</a>
        <a href="outsourced-cfo.html">Outsourced CFO</a>
        <a href="401k-retirement.html">401k / Retirement</a>
      </div>

      <!-- Site Map Column 2 -->
      <div class="footer-links-col">
        <h5>Company</h5>
        <a href="our-team.html">Our Team</a>
        <a href="faqs.html">FAQ's</a>
        <a href="contact.html">Contact</a>
        <a href="careers.html">Careers</a>
      </div>

      <!-- Site Map Column 3 -->
      <div class="footer-links-col">
        <h5>Media</h5>
        <a href="videos.html">Videos</a>
        <a href="fiduciary-vs-broker.html">Fiduciary vs. Broker</a>
        <a href="emoney.html">eMoney &mdash; Your Financial GPS</a>
        <h5 style="margin-top:1.5rem;">Resources</h5>
        <a href="https://wealth.emaplan.com/ema/SignIn?ema%2fria%2ftagplanning" target="_blank" rel="noopener">Client Portal</a>
        <a href="contact.html">Schedule a Meeting</a>
      </div>

    </div><!-- /footer-top -->
  </div>

  <div class="footer-bottom">
    <div class="container">
      <strong>Copyright &copy; 2025 The Affinity Group. All rights reserved.</strong>
      &nbsp;&bull;&nbsp; (330) 526-8412
    </div>
  </div>
</footer>
`;

  /* ---- Inject ---- */
  var headerTarget = document.getElementById('header-placeholder');
  var footerTarget = document.getElementById('footer-placeholder');

  if (headerTarget) headerTarget.outerHTML = headerHTML;
  if (footerTarget) footerTarget.outerHTML = footerHTML;

})();
