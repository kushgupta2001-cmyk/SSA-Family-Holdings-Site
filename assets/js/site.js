/* SSA website: photo slots, mobile menu, portfolio and news lists. */
(function () {
  'use strict';

  /* ---------- Photo slots ----------
     A slot looks for its photo at data-photo + one of these extensions.
     Drop e.g. assets/images/home/02-practice-offices.jpg into the repo and it appears. */
  var EXTENSIONS = ['.jpg', '.webp', '.jpeg', '.png'];

  function loadPhoto(slot) {
    var base = slot.getAttribute('data-photo');
    var i = 0;
    function tryNext() {
      if (i >= EXTENSIONS.length) return; // no photo yet: keep the green placeholder
      var url = base + EXTENSIONS[i++];
      var img = new Image();
      img.onload = function () {
        slot.style.setProperty('--photo', 'url("' + url + '")');
        slot.classList.add('has-photo');
      };
      img.onerror = tryNext;
      img.src = url;
    }
    tryNext();
  }

  function initPhotos() {
    var slots = document.querySelectorAll('[data-photo]');
    if (!('IntersectionObserver' in window)) {
      slots.forEach(loadPhoto);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { io.unobserve(e.target); loadPhoto(e.target); }
      });
    }, { rootMargin: '600px 0px' });
    slots.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Mobile menu ---------- */
  function initNav() {
    var btn = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      }
    });
  }

  /* ---------- Helpers ---------- */
  function el(tag, style, text) {
    var n = document.createElement(tag);
    if (style) n.setAttribute('style', style);
    if (text != null) n.textContent = text;
    return n;
  }

  var BTN_BASE = 'min-height: 44px; padding: 0 18px; font-family: inherit; font-size: 13px; font-weight: 600; letter-spacing: 0.04em; cursor: pointer; ';
  var BTN_ON = 'background: #1E3B2F; color: #F5F1E8; border: 1px solid #1E3B2F';
  var BTN_OFF = 'background: transparent; color: #15241D; border: 1px solid #B9AE97';

  function renderFilters(container, filters, current, onPick) {
    container.textContent = '';
    filters.forEach(function (f) {
      var on = f.id === current;
      var b = el('button', BTN_BASE + (on ? BTN_ON : BTN_OFF), f.label);
      b.type = 'button';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.addEventListener('click', function () { onPick(f.id); });
      container.appendChild(b);
    });
  }

  function getJSON(url) {
    return fetch(url, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(url + ' ' + r.status);
      return r.json();
    });
  }

  /* ---------- Portfolio (SSA Capital page) ---------- */
  function initPortfolio() {
    var fWrap = document.getElementById('portfolio-filters');
    var grid = document.getElementById('portfolio-grid');
    if (!fWrap || !grid) return;
    getJSON('/assets/data/portfolio.json').then(function (data) {
      var current = 'all';
      function draw() {
        renderFilters(fWrap, data.filters, current, function (id) { current = id; draw(); });
        grid.textContent = '';
        data.companies
          .filter(function (c) { return current === 'all' || c.sector === current; })
          .forEach(function (c) {
            var li = el('li', 'flex: 1 1 280px; min-width: 0; min-height: 132px; padding: 22px 24px; box-sizing: border-box; border-right: 1px solid #D8D0BF; border-bottom: 1px solid #D8D0BF; background: #FBF9F4; display: flex; flex-direction: column; gap: 6px');
            var top = el('div', 'display: flex; justify-content: space-between; align-items: baseline; gap: 12px');
            top.appendChild(el('span', "font-family: 'Cormorant Garamond', Georgia, serif; font-size: 25px; font-weight: 600; line-height: 1.1", c.name));
            if (c.exited) {
              top.appendChild(el('span', 'font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #F5F1E8; background: #1E3B2F; padding: 3px 8px; white-space: nowrap', 'Exited'));
            }
            li.appendChild(top);
            li.appendChild(el('span', 'font-size: 13px; color: #4F5A53; line-height: 1.5', c.description));
            grid.appendChild(li);
          });
      }
      draw();
    }).catch(function (e) { console.warn('Portfolio list could not load:', e.message); });
  }

  /* ---------- News (News page) ---------- */
  function initNews() {
    var fWrap = document.getElementById('news-filters');
    var list = document.getElementById('news-list');
    var empty = document.getElementById('news-empty');
    if (!fWrap || !list) return;
    getJSON('/assets/data/news.json').then(function (data) {
      var current = 'all';
      function draw() {
        renderFilters(fWrap, data.filters, current, function (id) { current = id; draw(); });
        list.textContent = '';
        var shown = data.items.filter(function (n) { return current === 'all' || n.business === current; });
        shown.forEach(function (n) {
          var li = el('li', 'border-bottom: 1px solid #D8D0BF');
          var a = el('a', 'display: flex; flex-wrap: wrap; gap: 8px 32px; align-items: baseline; padding: 26px 0');
          var href = n.url || '#';
          a.href = href;
          if (/^https?:/i.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
          a.appendChild(el('span', 'flex: 0 1 200px; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #8C6420; font-weight: 600', n.tag));
          a.appendChild(el('span', "flex: 1 1 480px; min-width: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; line-height: 1.2", n.title));
          a.appendChild(el('span', 'flex: 0 1 220px; font-size: 14px; color: #4F5A53', n.source));
          li.appendChild(a);
          list.appendChild(li);
        });
        if (empty) empty.hidden = shown.length !== 0;
      }
      draw();
    }).catch(function (e) { console.warn('News list could not load:', e.message); });
  }

  /* ---------- Real estate projects (Real Estate page) ---------- */
  function slugify(t) {
    return String(t || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'project';
  }

  function initProjects() {
    var fWrap = document.getElementById('projects-filters');
    var grid = document.getElementById('projects-grid');
    if (!fWrap || !grid) return;
    var FILTERS = [{ id: 'all', label: 'All' }, { id: 'completed', label: 'Completed' }, { id: 'development', label: 'Under development' }];
    var BADGE = 'font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 10px; font-weight: 600; ';
    getJSON('/assets/data/projects.json').then(function (data) {
      var current = 'all';
      function draw() {
        renderFilters(fWrap, FILTERS, current, function (id) { current = id; draw(); });
        grid.textContent = '';
        data.projects
          .filter(function (p) { return current === 'all' || p.status === current; })
          .forEach(function (p) {
            var done = p.status === 'completed';
            var li = el('li', 'flex: 1 1 340px; min-width: 0; background: #F5F1E8; border: 1px solid #D8D0BF; display: flex; flex-direction: column');
            var ph = el('div', 'aspect-ratio: 3 / 2; background: #2B4A3B; display: flex; align-items: flex-start; padding: 14px; box-sizing: border-box');
            ph.setAttribute('data-photo', '/assets/images/real-estate/projects/' + (p.photo || slugify(p.name)));
            ph.appendChild(el('span', BADGE + (done ? 'background: #F5F1E8; color: #1E3B2F' : 'background: #15241D; border: 1px solid #D4B072; color: #D4B072'), done ? 'Completed' : 'Under development'));
            li.appendChild(ph);
            var body = el('div', 'padding: 22px 24px; display: flex; flex-direction: column; gap: 6px');
            body.appendChild(el('div', 'font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #8C6420; font-weight: 600', p.type));
            body.appendChild(el('h3', "margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 26px; font-weight: 600", p.name));
            body.appendChild(el('div', 'font-size: 14px; color: #4F5A53', [p.location, p.year, p.size].filter(Boolean).join(' · ')));
            li.appendChild(body);
            grid.appendChild(li);
            loadPhoto(ph);
          });
      }
      draw();
    }).catch(function (e) { console.warn('Project list could not load:', e.message); });
  }

  function init() { initNav(); initPhotos(); initPortfolio(); initNews(); initProjects(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
