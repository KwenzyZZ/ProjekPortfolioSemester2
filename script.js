  AOS.init();


gsap.to('.lastest-work', {
   y: -700,
   scrollTrigger: {
     trigger: '.lastest-work',
     start: "top bottom",
     end: "bottom top",       
     scrub: 1,              
    }
  });

