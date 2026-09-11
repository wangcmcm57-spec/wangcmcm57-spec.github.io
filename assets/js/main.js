/* ============================================================
   王帅个人网站 · 单页交互
   - 移动端导航
   - Accordion 展开/收起（项目、文章）
   - Scroll spy（当前 section 高亮）
   ============================================================ */
(function () {
  'use strict';

  // ---- 移动端导航 ----
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // ---- Accordion ----
  document.querySelectorAll('.accordion__head').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var accordion = btn.parentElement;
      var isOpen = accordion.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // ---- Scroll spy ----
  var sections = document.querySelectorAll('section[id]');
  var navItems = document.querySelectorAll('.nav__links a');

  function updateActive() {
    var current = '';
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (sec) {
      if (scrollPos >= sec.offsetTop) current = sec.id;
    });
    navItems.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var hash = href.substring(1);
      link.classList.toggle('active', hash === current);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('load', updateActive);
  updateActive();
})();
