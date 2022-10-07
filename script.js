let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navlist');

menu.onclick = () => { 
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

window.onscroll = () => { 
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
};

const scrollReveal = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

scrollReveal.reveal('.hometext', {delay:350, origin:'left'})
scrollReveal.reveal('.home-img', {delay:350, origin:'right'})
scrollReveal.reveal('.sub-service,.about,.services,.contact',{delay:200, origin:'bottom'})





