let toggleLogo = document.querySelector('.logo-size-toggler');
let logoSize = document.querySelector('.logo-size');

toggleLogo.onclick = function( ) {
    console.log('success');
    logoSize.classList.toggle('enlarge');
}

$(document).ready(function(){
    $('.carousel-1').slick({
        dots:true
    });
  });
  