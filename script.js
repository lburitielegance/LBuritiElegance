    // Preloader
    window.addEventListener('load', function() {
      setTimeout(function() {
        document.getElementById('preloader').classList.add('hidden');
      }, 1500);
    });

    // Navbar Scroll
    var navbar = document.getElementById('navbar');
    var backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    // Hamburger Menu
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    function closeMobile() {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Scroll Reveal
    function revealOnScroll() {
      var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .product-card');
      var windowHeight = window.innerHeight;

      reveals.forEach(function(el) {
        var elementTop = el.getBoundingClientRect().top;
        var revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Parallax Effect
    var parallaxBg = document.getElementById('parallaxBg');

    window.addEventListener('scroll', function() {
      if (parallaxBg) {
        var scrolled = window.scrollY;
        var bannerTop = parallaxBg.parentElement.offsetTop;
        var speed = 0.3;
        parallaxBg.style.transform = 'translateY(' + ((scrolled - bannerTop) * speed) + 'px)';
      }
    });

    // Counter Animation
    function animateCounters() {
      var statItems = document.querySelectorAll('.stat-item h3');
      statItems.forEach(function(stat) {
        if (stat.dataset.animated) return;

        var rect = stat.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          stat.dataset.animated = 'true';
          var text = stat.textContent;
          var target = parseInt(text);
          var suffix = text.replace(/[0-9]/g, '');
          var current = 0;
          var increment = Math.ceil(target / 60);
          var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            stat.textContent = current + suffix;
          }, 30);
        }
      });
    }

    window.addEventListener('scroll', animateCounters);

    // Form Submit
    function handleSubmit(e) {
      e.preventDefault();
      var btn = e.target.querySelector('.btn-primary span');
      btn.textContent = 'Enviado!';
      btn.parentElement.style.background = '#2d7a2d';
      setTimeout(function() {
        btn.textContent = 'Enviar Mensagem';
        btn.parentElement.style.background = '';
        e.target.reset();
      }, 3000);
    }

    // Back to Top
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          var offset = 80;
          var top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });

    // Tilt Effect on Product Cards (desktop)
    if (window.innerWidth > 992) {
      var cards = document.querySelectorAll('.product-card');
      cards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
          var rect = card.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;
          var centerX = rect.width / 2;
          var centerY = rect.height / 2;
          var rotateX = (y - centerY) / 25;
          var rotateY = (centerX - x) / 25;
          card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
          card.style.transform = '';
        });
      });
    }
  
    
// TROCA DE IMAGEM POR COR (SWATCH)
document.querySelectorAll(".product-card").forEach(function(card) {
  const img = card.querySelector(".product-image img");
  const swatches = card.querySelectorAll(".color-swatch");

  swatches.forEach(function(swatch) {
    swatch.addEventListener("click", function() {

      // remove active só deste card
      swatches.forEach(function(s) {
        s.classList.remove("active");
      });

      // ativa o clicado
      swatch.classList.add("active");

      // pega a imagem do data-img
      const newImg = swatch.getAttribute("data-img");

      // animação 
      img.classList.add("switching");

      setTimeout(function() {
        img.src = newImg;
        img.classList.remove("switching");
      }, 200);

    });
  });
});
