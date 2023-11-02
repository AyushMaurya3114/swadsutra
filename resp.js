burger = document.querySelector('.burger'); 
mainnav = document.querySelector('.mainnav')
navlinks = document.querySelector('.navlinks') 

burger.addEventListener('click', ()=>{
    mainnav.classList.toggle('nav-height');
    navlinks.classList.toggle('visibility');
})