let toggleLogo = document.querySelector('.logo-size-toggler');
let logoSize = document.querySelector('.logo-size');
let navTitle = document.querySelector('.nav-title');

toggleLogo.onclick = function( ) {
    console.log('success');
    logoSize.classList.toggle('enlarge');
    navTitle.classList.toggle('hide');
}

$(document).ready(function(){
    $('.carousel-1').slick({
        dots: true,
        arrows:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
  });
  
  