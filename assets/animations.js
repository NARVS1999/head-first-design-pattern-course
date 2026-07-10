// ============================================================
// Animations & Interactivity Helpers
// Include after lessons-data.js in every lesson
// ============================================================
(function() {
  // ---- Scroll-triggered fade-in ----
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      elements.forEach(function(el) { observer.observe(el); });
    } else {
      // Fallback: show all
      elements.forEach(function(el) { el.classList.add('visible'); });
    }
  }

  // ---- Progress bar ----
  function initProgressBar() {
    var bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.id = 'progressBar';
    document.body.appendChild(bar);

    window.addEventListener('scroll', function() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
    });
  }

  // ---- Typewriter effect ----
  window.typewriterEffect = function(el, text, speed) {
    speed = speed || 40;
    el.textContent = '';
    el.style.borderRight = '2px solid var(--accent)';
    var i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // Blink cursor then remove
        setTimeout(function() {
          el.style.borderRight = 'none';
        }, 1200);
      }
    }
    type();
  };

  // ---- Stagger children animation ----
  window.staggerChildren = function(parent, delay) {
    delay = delay || 80;
    var children = parent.children;
    for (var i = 0; i < children.length; i++) {
      children[i].style.opacity = '0';
      children[i].style.transform = 'translateY(10px)';
      children[i].style.transition = 'opacity 0.4s ease ' + (i * delay) + 'ms, transform 0.4s ease ' + (i * delay) + 'ms';
      (function(child) {
        setTimeout(function() {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, 50);
      })(children[i]);
    }
  };

  // ---- Run on DOM ready ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initScrollAnimations();
      initProgressBar();
    });
  } else {
    initScrollAnimations();
    initProgressBar();
  }
})();
