document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-item, .portfolio-item');
    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
  const cards = document.querySelectorAll('.project-card, .skill-item, .portfolio-item');
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };
  const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    fadeInObserver.observe(card);
  });


    const container = document.querySelector(".portfolio-item-content");
    items.forEach(item => {
      const content = `
        <div class="contents-portfolio-item">
          <h3>${item.title}</h3>
          <div class="video-portfolio-item">
            <iframe width="560" height="315" src="${item.video}" 
              title="${item.title}" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
          <div class="all" style="position: relative; top: 10px;">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}
          </div>
        </div>
      `;
      container.innerHTML += content; // Adiciona o conteúdo ao contêiner
    });
