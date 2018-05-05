/**** CURRENT YEAR FOR FOOTER ****/
const copyright = document.querySelector('.copyright');
const year = new Date().getFullYear();

copyright.innerHTML = `Nick Boncella &copy; ${year}`;

/**** SLIDE IN INTRO ON SCROLL ****/
/* debounce - prevent function from constantly firing */
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/* store section to be slid up in var */
const slideIntro = document.getElementById('slide-up');
/* add event listner to window */
window.addEventListener('scroll', debounce(slideUp));

/* SLIDEUP function */
function slideUp(e) {
  /* scroll thru intro section */
  const slideUpAt = (window.scrollY + window.innerHeight) - (slideIntro.scrollHeight / 3);
  /* bottom of intro section */
  const imageBottom = slideIntro.offsetTop + slideIntro.scrollHeight;
  const isHalfShown = slideUpAt > slideIntro.offsetTop;
  const isNotScrolledPast = window.scrollY < imageBottom;
  if (isHalfShown && isNotScrolledPast) {
    slideIntro.classList.add('active');
  } else {
    slideIntro.classList.remove('active');
  }
}
