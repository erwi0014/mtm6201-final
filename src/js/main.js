let toggleLogo = document.querySelector('.logo-size-toggler');
let logoSize = document.querySelector('.logo-size');
let navTitle = document.querySelector('.nav-title');
let isLarge = true;
let isScrolled = false;

function setLogoSize(large) {
    if (large) {
        logoSize.classList.remove('shrink');
        if (window.innerWidth < 992) {
            navTitle.classList.remove('hide');
        }
    } else {
        logoSize.classList.add('shrink');
        if (window.innerWidth < 992) {
            navTitle.classList.add('hide');
        }
    }
    isLarge = large;
}

function updateNavTitleVisibility() {
    if (window.innerWidth >= 992) {
        navTitle.classList.remove('hide');
    } else if (!isLarge) {
        navTitle.classList.add('hide');
    }
}

toggleLogo.onclick = function() {
    if (!isScrolled) {
        setLogoSize(!isLarge);
    }
};

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        setLogoSize(false);
        isScrolled = true;
    } else {
        setLogoSize(true);
        isScrolled = false;
    }
});

window.addEventListener('resize', updateNavTitleVisibility);

// Initial setup
updateNavTitleVisibility();




$(document).ready(function(){
    $('.carousel-1').slick({
        dots: true,
        arrows:true,
        adaptiveHeight:true,
        // autoplay:true,
        respondTo:'slider',
        
    });
  });
  
  

  function scrollToNextArticle() {
    // Find the currently visible article
    const articles = document.querySelectorAll('article');
    let currentArticle;

    for (let i = 0; i < articles.length; i++) {
        const rect = articles[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentArticle = articles[i];
            break;
        }
    }

    // Scroll to the next article
    if (currentArticle && currentArticle.nextElementSibling) {
        currentArticle.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
}