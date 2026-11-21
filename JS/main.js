document.addEventListener('DOMContentLoaded', function () {

  /* --- header : ombre au scroll --- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- menu mobile --- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* --- FAQ : accordéon --- */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.nextElementSibling;
      var isOpen = btn.classList.contains('open');

      document.querySelectorAll('.faq-q.open').forEach(function (other) {
        other.classList.remove('open');
        other.setAttribute('aria-expanded', 'false');
        if (other.nextElementSibling) other.nextElementSibling.style.display = 'none';
      });

      if (!isOpen) {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.display = 'block';
      }
    });
  });

  /* --- formulaire : pas encore de backend --- */
  var form = document.querySelector('.quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Gracias. El envío del formulario se conectará próximamente: mientras tanto, escríbenos por WhatsApp.';
        note.style.color = '#b8942e';
      }
    });
  }

  /* --- lien actif dans la nav --- */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (link) {
    if (link.getAttribute('href') === page) link.classList.add('is-active');
  });

});
