/* Builds the page from content.js. You shouldn't need to edit this file. */
(function () {
  var S = window.SITE || {};

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function list(items, cls) {
    return '<ul class="' + cls + '">' + (items || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
  }
  function $(sel) { return document.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  /* ---------- Google Analytics (only runs when googleAnalyticsId is set in content.js) ---------- */
  var GA_ID = String(S.googleAnalyticsId || '').trim();
  if (/^G-[A-Z0-9]+$/i.test(GA_ID)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(ga);
  }
  function track(name, params) {
    if (window.gtag) window.gtag('event', name, params || {});
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var where = a.closest('header') ? 'top_bar' : a.closest('#contact') ? 'contact' : 'about';
    if (a.dataset.cv) track('cv_open', { language: a.dataset.cv === 'he' ? 'hebrew' : 'english', location: where });
    else if (a.dataset.link) track('social_click', { network: a.dataset.link });
    else if (a.classList.contains('view')) {
      var card = a.closest('.project');
      track('project_click', { project_title: card ? card.querySelector('h3').textContent : '', link_url: a.href });
    }
    else if (a.id === 'email-btn') track('contact_click', { method: 'email' });
    else if (a.id === 'whatsapp-btn') track('contact_click', { method: 'whatsapp' });
  }, true);

  /* ---------- basic text and links ---------- */
  $all('[data-text]').forEach(function (el) { el.textContent = S[el.dataset.text] || ''; });
  $('#photo').src = S.photo || 'assets/profile.jpg';
  $('#year').textContent = new Date().getFullYear();

  $all('[data-link]').forEach(function (a) { a.href = (S.links || {})[a.dataset.link] || '#'; });
  $all('[data-cv]').forEach(function (a) {
    var file = a.dataset.cv === 'he' ? S.cvHebrew : S.cvEnglish;
    a.href = file;
    a.target = '_blank';                 // open the PDF as a preview in a new tab
    a.rel = 'noopener';
  });

  $('#email-btn').href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(S.email) +
    '&su=' + encodeURIComponent(S.emailSubject || '');
  $('#whatsapp-btn').href = 'https://wa.me/' + String(S.whatsappNumber).replace(/\D/g, '') +
    '?text=' + encodeURIComponent(S.whatsappMessage || '');

  /* ---------- about ---------- */
  $('#about-text').innerHTML = (S.about || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
  function infoList(items) {
    return (items || []).map(function (i) {
      return '<div class="info-title">' + esc(i.title) + '</div><div class="info-place">' + esc(i.place) + '</div>';
    }).join('');
  }
  $('#education').innerHTML = infoList(S.education);
  $('#experience').innerHTML = infoList(S.experience);

  var ICONS = {
    sql: '<ellipse cx="9" cy="4.5" rx="6" ry="2.5"/><path d="M3 4.5 V13.5 C3 14.9 5.7 16 9 16 C12.3 16 15 14.9 15 13.5 V4.5 M3 9 C3 10.4 5.7 11.5 9 11.5 C12.3 11.5 15 10.4 15 9"/>',
    python: '<path d="M6 5 L2 9 L6 13 M12 5 L16 9 L12 13 M10.5 3.5 L7.5 14.5"/>',
    excel: '<rect x="2.5" y="3" width="13" height="12" rx="1.5"/><path d="M2.5 7 H15.5 M2.5 11 H15.5 M7 3 V15"/>',
    powerbi: '<path d="M4 15 V10 M9 15 V6 M14 15 V3" style="stroke-width:2.4"/><path d="M2 16 H16"/>',
    math: '<path d="M14 3.5 H4 L9.5 9 L4 14.5 H14"/>',
    stats: '<path d="M2 14.5 C6 14.5 6 4 9 4 C12 4 12 14.5 16 14.5 M9 4 V14.5"/>',
    ml: '<path d="M4.5 5 L9 9 L4.5 13 M9 9 H13.5"/><circle class="fill" cx="4.5" cy="5" r="1.8"/><circle class="fill" cx="4.5" cy="13" r="1.8"/><circle class="fill" cx="9" cy="9" r="1.8"/><circle class="fill" cx="14" cy="9" r="1.8"/>',
    ai: '<rect x="3.5" y="6" width="11" height="8.5" rx="2"/><path d="M9 6 V3.8"/><circle class="fill" cx="9" cy="2.8" r="1"/><circle class="fill" cx="7" cy="10.2" r="1.1"/><circle class="fill" cx="11" cy="10.2" r="1.1"/>',
    tableau: '<path d="M9 2 V16 M2 9 H16 M4 4.5 V7.5 M2.5 6 H5.5 M14 10.5 V13.5 M12.5 12 H15.5"/>',
    r: '<ellipse cx="9" cy="8" rx="7" ry="4.5"/><path d="M7 6 V15 M7 6 H10.5 C12 6 12 9.5 10.5 9.5 H7 M10 9.5 L12.5 15"/>',
    chart: '<path d="M2 15 L6.5 9.5 L10 12 L16 4 M2 16 H16"/>'
  };
  $('#stack').innerHTML = (S.stack || []).map(function (s) {
    var icon = ICONS[s.icon] || ICONS.chart;
    return '<li><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      icon + '</svg><span>' + esc(s.name) + '</span></li>';
  }).join('');

  /* ---------- projects ---------- */
  $('#track-projects').innerHTML = (S.projects || []).map(function (p) {
    return '<article class="col project">' +
      '<h3>' + esc(p.title) + '</h3>' +
      list(p.tags, 'tags') +
      '<div class="sub"><div class="sub-label">tools</div>' + list(p.tools, 'tools') + '</div>' +
      '<p>' + esc(p.description) + '</p>' +
      '<div class="sub"><div class="sub-label">key results</div>' + list(p.results, 'results') + '</div>' +
      '<a class="view" href="' + esc(p.link || '#') + '" target="_blank" rel="noopener">View project <span aria-hidden="true">→</span></a>' +
      '</article>';
  }).join('');

  /* ---------- videos: title, video, then a short description ---------- */
  var videos = S.videos || [];
  $('#track-videos').innerHTML = videos.map(function (v, i) {
    var bg = v.thumbnail ? ' style="background-image:url(\'' + esc(v.thumbnail) + '\')"' : '';
    return '<div class="col video">' +
      '<h3>' + esc(v.title) + '</h3>' +
      '<div class="screen" data-video="' + i + '"' + bg + '>' +
      '<button type="button" class="play" aria-label="Play video: ' + esc(v.title) + '"><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M7 4 L18 11 L7 18 Z"/></svg></button>' +
      (v.duration ? '<span class="duration">' + esc(v.duration) + '</span>' : '') +
      '</div>' +
      (v.description ? '<p class="video-desc">' + esc(v.description) + '</p>' : '') +
      '</div>';
  }).join('');

  /* ---------- carousels: each arrow slides one full "page" (3 cards on desktop) ---------- */
  var GAP = 20;
  function pageInfo(track) {
    var first = track.firstElementChild;
    if (!first) return null;
    var step = first.offsetWidth + GAP;
    var perPage = Math.max(1, Math.round((track.clientWidth + GAP) / step));
    return { step: step, perPage: perPage };
  }
  function updateArrows(track) {
    var max = track.scrollWidth - track.clientWidth;
    $all('.arrow[data-track="' + track.id + '"]').forEach(function (b) {
      b.disabled = b.dataset.dir === '-1' ? track.scrollLeft <= 2 : track.scrollLeft >= max - 2;
    });
  }
  $all('.arrow').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var track = document.getElementById(btn.dataset.track);
      var info = pageInfo(track);
      if (!info) return;
      var index = Math.round(track.scrollLeft / info.step) + Number(btn.dataset.dir) * info.perPage;
      var maxIndex = Math.max(0, track.children.length - info.perPage);
      index = Math.max(0, Math.min(maxIndex, index));
      track.scrollTo({ left: index * info.step, behavior: 'smooth' });
    });
  });
  $all('.track').forEach(function (track) {
    track.addEventListener('scroll', function () { updateArrows(track); }, { passive: true });
    updateArrows(track);
  });
  window.addEventListener('resize', function () { $all('.track').forEach(updateArrows); });
  window.addEventListener('load', function () { $all('.track').forEach(updateArrows); });

  /* ---------- video popup: opens centered with the page dimmed behind it ---------- */
  var player = $('#player'), stage = $('#player-stage'), lastFocus = null, closeTimer = null;

  function youtubeId(url) {
    var m = String(url).match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    return m ? m[1] : null;
  }
  function openVideo(i) {
    var v = videos[i] || {};
    var src = v.video || '';
    var yt = youtubeId(src);
    clearTimeout(closeTimer);
    $('#player-title').textContent = v.title || '';
    $('#player-desc').textContent = v.description || '';
    $('#player-desc').hidden = !v.description;
    if (yt) {
      stage.innerHTML = '<iframe src="https://www.youtube.com/embed/' + yt + '?autoplay=1&rel=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="' + esc(v.title) + '"></iframe>';
    } else if (src) {
      stage.innerHTML = '<video src="' + esc(src) + '" controls autoplay playsinline></video>';
    } else {
      stage.innerHTML = '<div class="player-empty">Video coming soon.</div>';
    }
    track('video_play', { video_title: v.title || '', video_source: yt ? 'youtube' : src ? 'file' : 'none' });
    lastFocus = document.activeElement;
    player.hidden = false;
    document.body.style.overflow = 'hidden';
    void player.offsetWidth;            // let the browser draw the start state so the animation runs
    player.classList.add('open');
    $('.player-close').focus();
  }
  function closeVideo() {
    if (player.hidden || !player.classList.contains('open')) return;
    player.classList.remove('open');
    var v = stage.querySelector('video'); if (v) v.pause();
    closeTimer = setTimeout(function () {
      stage.innerHTML = '';
      player.hidden = true;
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }, 320);
  }
  $all('.screen').forEach(function (el) {
    el.addEventListener('click', function () { openVideo(Number(el.dataset.video)); });
  });
  $('.player-close').addEventListener('click', closeVideo);
  player.addEventListener('click', function (e) { if (e.target === player) closeVideo(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeVideo(); });
})();
