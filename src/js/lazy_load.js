document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;
  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});

var $ = require("jquery");

$('.video__placeholder, .video__button').on('click', function() {
  if ( !$('#video-player').length ) {
    var video = '<iframe id="video-player" src="' + $('.video__placeholder').attr('data-video') + '" frameborder="0" allowfullscreen wmode="opaque"></iframe>';
    $(video).insertAfter( $('.video__placeholder') );
    $('.video__button').addClass('is-playing');
  } else {
    $('.video__button').removeClass('is-playing');
    $('#video-player').remove();
  }
});