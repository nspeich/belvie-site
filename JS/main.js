document.addEventListener('DOMContentLoaded', function() {

  var navbar = document.getElementById('navbar');
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
    });
  });

  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById('tab-' + target).classList.add('active');
    });
  });

  document.querySelectorAll('.faq-q').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var answer = btn.nextElementSibling;
      var isOpen = btn.classList.contains('open');
      document.querySelectorAll('.faq-q.open').forEach(function(openBtn) {
        openBtn.classList.remove('open');
        openBtn.nextElementSibling.style.display = 'none';
      });
      if (!isOpen) {
        btn.classList.add('open');
        answer.style.display = 'block';
      }
    });
  });

  var submitBtn = document.querySelector('.btn-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', function() {
      alert('Formulario no conectado - pendiente de backend o servicio de email.');
    });
  }

});
