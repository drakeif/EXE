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
// WAYPOINT
let waypoint = new Waypoint({
  element: document.getElementById('features'),
  handler: function(direction) {
    let header = document.getElementById('header');
    if(direction === 'down') {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }
});
// SWIPER JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
// COUNT TEXTAREA
const textarea = document.getElementById('textarea'),
      label = document.getElementById('label');

      textarea.addEventListener('keyup', () => {
        label.innerHTML = textarea.value.length;
      });
// SKILLS ANIMATE
const skills = document.querySelectorAll('.skills');

window.addEventListener('scroll', () => {
    skills.forEach((element) => {
        let skillsPos = element.offsetTop;
        let topOfWindow = window.scrollY;

        if (skillsPos < topOfWindow + 400) {
          element.classList.add('active');
        };
    });
});
// SEND
const send = document.getElementById('send'),
      home = document.getElementById('toHome');

send.addEventListener('click', (e) => {
  e.target.innerHTML = 'sending..'
  setTimeout(() => {
    e.target.innerHTML = 'OK'
  },1000);
  setTimeout(() => {
    home.click();
  },2000);
  setTimeout(() => {
    window.location.reload();
    alert('Well Done')
  },3000);
});