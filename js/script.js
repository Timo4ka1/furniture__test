// Сладйер на головній сторінці
$(document).ready(function () {
   $('.section2__slider').slick({
      slidesToShow: 3,
   });
});

//меню бургер
document.querySelector('.burger__logo').addEventListener('click', function () {
   this.classList.toggle('active');
   document.querySelector('.burger__menu').classList.toggle('open');
})