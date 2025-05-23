  AOS.init();


gsap.to('.lastest-work', {
   y: -700,
   scrollTrigger: {
     trigger: '.lastest-work',
     start: "top botto",
     end: "bottom top",       
     scrub: 1,              
    }
  });


const body = document.body;
 body.style.transition = 'background-color 0.5s ease';
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (link.classList.contains('home')) {
        body.style.backgroundColor = '#f3f3ef';
      } else if (link.classList.contains('portfolio')) {
        body.style.backgroundColor = '#0ba13b';
      } else if (link.classList.contains('contact')) {
        body.style.backgroundColor = '#ff8743';
      }
    });

    link.addEventListener('mouseleave', () => {
      body.style.backgroundColor = '';
    });
  });