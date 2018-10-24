// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}


var video_button = document.querySelector('.video__button');
var place_holder = document.querySelector('.video__placeholder');

var place_holder_click = function(){
  if ( document.getElementById('video-player') == null ){
    var video = document.createElement('iframe');
    video.id = 'video-player';
    video.src = place_holder.getAttribute('data-video');
    video.frameborder = 0;
    video.allowfullscreen = true;
    video.wmode = "opaque";
    insertAfter(video, place_holder);
    addClass(video_button, 'is-playing');
  }else{
    removeClass(video_button, 'is-playing');
    document.getElementById('video-player').remove()
  }
}
video_button.addEventListener('click', place_holder_click)
place_holder.addEventListener('click', place_holder_click)