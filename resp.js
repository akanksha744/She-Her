burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})


var nav = document.querySelector('.navbar');
var homeSection = document.querySelector('#home');

function updateNavbarBackground() {
    if (window.scrollY + 300 > homeSection.offsetHeight) {
        nav.classList.add('navbar-bg');
    } else {
        nav.classList.remove('navbar-bg');
    }
}

updateNavbarBackground();
window.addEventListener('scroll', updateNavbarBackground);




const navLinks = document.querySelectorAll('header .navbar .nav-list a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  navLinks.forEach(link => {
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    const rect = section.getBoundingClientRect();
    if (rect.top <= 50 && rect.bottom >= 50) {
      link.style.color = 'pink';
    } else {
      link.style.color = 'white'; 
    }
  });
});
