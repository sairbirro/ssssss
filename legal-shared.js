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
