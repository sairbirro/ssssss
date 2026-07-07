// nav dropdown (works via click/tap on both mobile & desktop)
document.addEventListener('DOMContentLoaded', function(){
  const navDropdown = document.getElementById('navDropdown');
  const navDropdownBtn = document.getElementById('navDropdownBtn');
  if(navDropdown && navDropdownBtn){
    navDropdownBtn.addEventListener('click', function(e){
      e.stopPropagation();
      const isOpen = navDropdown.classList.toggle('open');
      navDropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function(e){
      if(!navDropdown.contains(e.target)){
        navDropdown.classList.remove('open');
        navDropdownBtn.setAttribute('aria-expanded','false');
      }
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        navDropdown.classList.remove('open');
        navDropdownBtn.setAttribute('aria-expanded','false');
      }
    });
  }
});

// ===== خلفية الجزيئات المتحركة (Particles Background) =====
document.addEventListener('DOMContentLoaded', function(){
  if(typeof particlesJS !== 'undefined' && document.getElementById('particles-js')){
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#3b82f6" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#3b82f6", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
      },
      "retina_detect": true
    });
  }
});
