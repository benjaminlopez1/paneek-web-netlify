// JS Goes here - ES6 supported
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

var video_button = document.querySelectorAll('.video__button');

video_button.forEach(function(vb, index){
  vb.addEventListener('click', function(){
    if ( document.getElementById('video-player'+(index+1)) == null ){
    var place_holder = document.getElementById('video__placeholder'+(index+1))
    var video = document.createElement('iframe');
    video.id = 'video-player'+(index+1);
    video.src = place_holder.getAttribute('data-video');
    video.frameborder = 0;
    video.allowfullscreen = true;
    video.wmode = "opaque";
    insertAfter(video, place_holder);
    addClass(vb, 'is-playing');
  }else{
    removeClass(vb, 'is-playing');
    document.getElementById('video-player'+(index+1)).remove()
  }
  })
})

var path = window.location.pathname
var tab_active =  document.querySelector('.mdc-tab--active')
var as_tab_active = document.querySelector('.mdc-list-item--activated')

if (tab_active.getAttribute('href') != path && as_tab_active.getAttribute('href') != path){
  if (path == '/'){
    var tab = document.getElementById('tab-index');
    var as_tab = document.getElementById('as-tab-index');  
  }
  if (path == '/examples/'){
    var tab = document.getElementById('tab-examples');
    var as_tab = document.getElementById('as-tab-examples');
  }
  if (path == '/faq/'){
    var tab = document.getElementById('tab-faq');
    var as_tab = document.getElementById('as-tab-faq');
  }
  if (path == '/login/'){
    var tab = document.getElementById('tab-sign-in');
    var as_tab = document.getElementById('as-tab-sign-in');
  }

  tab_active.tabindex = -1;
  tab.tabindex = 0;
  removeClass(tab_active, 'mdc-tab--active');
  removeClass(as_tab_active, 'mdc-list-item--activated');
  var indicator = document.querySelector('.mdc-tab-indicator--active');
  removeClass(indicator, 'mdc-tab-indicator--active');
  addClass(tab, 'mdc-tab--active');
  addClass(as_tab, 'mdc-list-item--activated');
  addClass(tab.getElementsByClassName( 'mdc-tab-indicator' )[0], 'mdc-tab-indicator--active');
}

function scrollIt(top) {  
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': top
  });
}


const btns = document.querySelectorAll('.js-btn');
const sections = document.querySelectorAll('.js-section');

btns.forEach(function(btn){
  btn.addEventListener('click', function(){
    var href = btn.getAttribute('href').split('#')[1];
    var section = document.getElementById(href);
    var top = section.offsetTop - 100;
    scrollIt(parseInt(top));
  })
})

const slide_buttons = document.querySelectorAll('.slide');
const forms = document.querySelectorAll('.login-forms');

slide_buttons.forEach( function(btn){
  btn.addEventListener('click', function(){
      forms.forEach(function(form){
        form.classList.toggle('hide');
      })
  })
})

var navbarCollapse = function() {
  var nav_items = document.querySelectorAll('.mdc-tab__text-label');
  var nav_underlines = document.querySelectorAll('.mdc-tab-indicator .mdc-tab-indicator__content--underline');
  if (window.pageYOffset > 100) {
      nav_items.forEach(function(item){
        removeClass(item, "mdc-tab__text-label-white");
      })
      
      nav_underlines.forEach(function(item){
        removeClass(item, "mdc-tab-indicator__content--underline-white");
      })

      addClass(document.getElementById('mainNav'), "navbar-shrink");
  } else {
      removeClass(document.getElementById('mainNav'), "navbar-shrink");
      nav_items.forEach(function(item){
        addClass(item, "mdc-tab__text-label-white");
      })
      nav_underlines.forEach(function(item){
        addClass(item, "mdc-tab-indicator__content--underline-white");
      })
      
  }
};

navbarCollapse()
window.addEventListener("scroll", navbarCollapse);