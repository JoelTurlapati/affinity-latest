/* ============================================================
   Affinity Group — Shared Navigation & UI JS
   ============================================================ */

(function () {
  'use strict';

  // ---- Sticky header shadow on scroll ----
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ---- Mobile hamburger toggle ----
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
  }

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      const isOpen = this.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-question').forEach(function (q) {
        q.classList.remove('open');
        if (q.nextElementSibling) q.nextElementSibling.classList.remove('open');
      });

      // Toggle current
      if (!isOpen) {
        this.classList.add('open');
        if (answer) answer.classList.add('open');
      }
    });
  });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav if open
        if (mobileNav && mobileNav.classList.contains('open')) {
          hamburger.classList.remove('open');
          mobileNav.classList.remove('open');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // ---- Active nav link highlighting ----
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href !== '#' && currentPage === href) {
      link.style.color = 'var(--gold)';
    }
  });

  // ---- Scroll reveal animation ----
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // ---- YouTube Modal ----
  // Inject modal HTML once
  var ytModalHTML = `
<div id="yt-modal" style="
  display:none; position:fixed; inset:0; z-index:9999;
  background:rgba(0,0,0,0.88); align-items:center; justify-content:center;">
  <div style="position:relative; width:90%; max-width:900px;">
    <button id="yt-modal-close" style="
      position:absolute; top:-44px; right:0;
      background:none; border:none; color:#fff;
      font-size:2rem; cursor:pointer; line-height:1;
      font-family:sans-serif;">&times;</button>
    <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:4px;">
      <iframe id="yt-modal-iframe"
        style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;"
        src="" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</div>`;
  document.body.insertAdjacentHTML('beforeend', ytModalHTML);

  var ytModal    = document.getElementById('yt-modal');
  var ytIframe   = document.getElementById('yt-modal-iframe');
  var ytClose    = document.getElementById('yt-modal-close');

  function openYTModal(videoId) {
    // YouTube embeds require http/https — on file:// protocol open in new tab instead
    if (window.location.protocol === 'file:') {
      window.open('https://www.youtube.com/watch?v=' + videoId, '_blank');
      return;
    }
    ytIframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
    ytModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeYTModal() {
    ytModal.style.display = 'none';
    ytIframe.src = '';
    document.body.style.overflow = '';
  }

  // Close on X button
  if (ytClose) ytClose.addEventListener('click', closeYTModal);

  // Close on backdrop click
  ytModal.addEventListener('click', function (e) {
    if (e.target === ytModal) closeYTModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && ytModal.style.display === 'flex') closeYTModal();
  });

  // Intercept clicks on .yt-modal elements (div-based thumbnails)
  document.addEventListener('click', function (e) {
    var thumb = e.target.closest('.yt-modal');
    if (thumb) {
      e.preventDefault();
      var videoId = thumb.getAttribute('data-yt');
      if (videoId) openYTModal(videoId);
    }
  });

  // Also intercept legacy anchor-based video thumbs pointing to YouTube
  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a.video-thumb');
    if (anchor) {
      var href = anchor.getAttribute('href') || '';
      var match = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (match) {
        e.preventDefault();
        openYTModal(match[1]);
      }
    }
  });

})();
