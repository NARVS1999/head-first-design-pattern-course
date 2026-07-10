// Auto-builds prev/next buttons from window.LESSONS.
// Include this script in every lesson page (after lessons-data.js).
(function() {
  if (!window.LESSONS || !LESSONS.length) return;

  var nav = document.querySelector('.lesson-nav');
  if (!nav) return;

  var pathname = window.location.pathname;
  var filename = pathname.split('/').pop() || '';
  var currentId = filename.split('-')[0];
  var currentIdx = -1;

  var baseDir = pathname.substring(0, pathname.lastIndexOf('/') + 1);

  for (var i = 0; i < LESSONS.length; i++) {
    if (LESSONS[i].id === currentId) { currentIdx = i; break; }
  }

  if (currentIdx < 0) return;

  var arrowLeft = (window.ICONS && ICONS.arrowLeft) ? ICONS.arrowLeft : '<svg class="icon-inline nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>';
  var arrowRight = (window.ICONS && ICONS.arrowRight) ? ICONS.arrowRight : '<svg class="icon-inline nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

  var html = '';

  if (currentIdx > 0) {
    var prev = LESSONS[currentIdx - 1];
    html += '<a href="' + baseDir + prev.file + '" class="nav-link nav-prev">' + arrowLeft + ' Previous: ' + prev.title + '</a>';
  }

  if (currentIdx < LESSONS.length - 1) {
    var next = LESSONS[currentIdx + 1];
    var cls = currentIdx === 0 ? 'nav-link nav-next nav-link-only' : 'nav-link nav-next';
    html += '<a href="' + baseDir + next.file + '" class="' + cls + '">Next: ' + next.title + ' ' + arrowRight + '</a>';
  }

  nav.innerHTML = html;
})();
