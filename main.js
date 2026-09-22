// IMARIXA — main.js
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '639667536305';

  /* Mobile menu toggle */
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Package "Choose Package" buttons -> WhatsApp with prefilled message,
     and scroll to / prefill the quote form's package select */
  var packageSelect = document.getElementById('package');
  document.querySelectorAll('.choose-package').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.price-card');
      if (!card) return;
      var name = card.getAttribute('data-package');
      var price = card.getAttribute('data-price');

      // Prefill quote form package dropdown if present
      if (packageSelect) {
        for (var i = 0; i < packageSelect.options.length; i++) {
          if (packageSelect.options[i].text.indexOf(name) === 0) {
            packageSelect.selectedIndex = i;
            break;
          }
        }
      }

      var message = 'Hello IMARIXA, I am interested in the ' + name +
        ' package priced at ' + price + '. I would like to know the next steps.';
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
      window.open(url, '_blank', 'noopener');
    });
  });

  /* Quote form: no backend connected yet — this is a clean placeholder
     that avoids implying a live submission. See README / .env.example
     for wiring up Formspree, Resend, EmailJS or a serverless function. */
  var quoteForm = document.getElementById('quoteForm');
  var formStatus = document.getElementById('formStatus');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = new FormData(quoteForm);
      var name = data.get('fullName') || '';
      var service = data.get('service') || '';
      var pkg = data.get('package') || '';
      var phone = data.get('phone') || '';
      var description = data.get('description') || '';

      var lines = [
        'Hello IMARIXA, I would like a quote.',
        'Name: ' + name,
        'Phone: ' + phone,
        'Service: ' + service,
        'Package: ' + pkg
      ];
      if (description) lines.push('Details: ' + description);

      var message = lines.join('\n');
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);

      if (formStatus) {
        formStatus.textContent = 'This form is not yet connected to an email service. Opening WhatsApp with your details so we can respond directly — see README.md to connect a form backend.';
      }
      window.open(url, '_blank', 'noopener');
    });
  }

  /* Respect reduced motion: no extra JS-driven animation is added beyond
     the CSS transitions already gated by prefers-reduced-motion. */
})();
