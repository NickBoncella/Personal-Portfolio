/*** CURRENT YEAR FOR FOOTER ***/
const copyright = document.querySelector('.copyright');
const year = new Date().getFullYear();

copyright.innerHTML = `Nick Boncella &copy; ${year}`;

/*** SLIDE IN INTRO ON SCROLL ***/
