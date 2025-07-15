const toggleBtn  = document.getElementById('checkbox');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {

  mobileMenu.classList.toggle('hidden');

  mobileMenu.classList.remove('animate-down');      
  void mobileMenu.offsetWidth;                      
  mobileMenu.classList.add('animate-down');        
});
