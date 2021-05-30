// BURGER MENU
const burger = document.getElementById('burger'),
      nav = document.getElementById('nav'),
      body = document.getElementById('body'),

      closeMenu = document.querySelectorAll('.header__nav');

      burger.addEventListener('click', () => {
          nav.classList.toggle('active');
          body.classList.toggle('active');
          burger.classList.toggle('active')
      });

      closeMenu.forEach(el => el.addEventListener('click', ()=> {
        nav.classList.remove('active');
        body.classList.remove('active');
        burger.classList.remove('active')
      }));