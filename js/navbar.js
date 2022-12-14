// search-box open close js code
let navbar = document.querySelector('.navbar');
let searchBox = document.querySelector('.search-box .bx-search');
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener('click', () => {
  navbar.classList.toggle('showInput');
  if (navbar.classList.contains('showInput')) {
    searchBox.classList.replace('bx-search', 'bx-x');
  } else {
    searchBox.classList.replace('bx-x', 'bx-search');
  }
});

// sidebar open close js code
let navLinks = document.querySelector('.nav-links');
let menuOpenBtn = document.querySelector('.navbar .bx-menu');
let menuCloseBtn = document.querySelector('.nav-links .bx-x');
menuOpenBtn.onclick = function () {
  navLinks.style.left = '0';
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = '-100%';
};

// sidebar submenu open close js code
let aboutusArrow = document.querySelector('.aboutus-arrow');
aboutusArrow.onclick = function () {
  navLinks.classList.toggle('show1');
};
let moreArrow = document.querySelector('.more-arrow');
moreArrow.onclick = function () {
  navLinks.classList.toggle('show2');
};
let moreArrow2 = document.querySelector('.more-arrow2');
moreArrow2.onclick = function () {
  navLinks.classList.toggle('show3');
};
let jsArrow = document.querySelector('.js-arrow');
jsArrow.onclick = function () {
  navLinks.classList.toggle('show4');
};
let moreArrow3 = document.querySelector('.more-arrow3');
moreArrow3.onclick = function () {
  navLinks.classList.toggle('show5');
};

function showAlert() {
  swal({
    title: 'Good job!',
    text: 'Please Contact us in (021) 8835-3601 /(+62) 811-8306-388 ',
    icon: 'success',
    button: 'Aww yiss!',
  });
}
