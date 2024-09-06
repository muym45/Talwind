window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    }
  };
  
  // Hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });
  
  // Klik di luar hamburger
  window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });
  
  // Darkmode toggle
  const blackToggle = document.querySelector('#black-toggle');
  const html = document.querySelector('html');
  
  blackToggle.addEventListener('click', function () {
    if (blackToggle.checked) {
      html.classList.add('black');
      localStorage.theme = 'black';
    } else {
      html.classList.remove('black');
      localStorage.theme = 'light';
    }
  });
  
  // pindahkan posisi toggle sesuai mode
  if (localStorage.theme === 'black' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: black)').matches)) {
    blackToggle.checked = true;
  } else {
    blackToggle.checked = false;
  }