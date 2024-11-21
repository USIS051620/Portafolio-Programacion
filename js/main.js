let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

/******************* */

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top <= offset + height) {
        navLinks.forEach.apply(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });

    /******************************** */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /******************* */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}; 

/****************************** */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('.inicio-contenido, .heading', { origin: 'top' });
ScrollReveal().reveal('.inicio-img, .servicios-contenido, .porta-caja, .contacto form', { origin: 'buttom' });
ScrollReveal().reveal('.sobremi h2, .sobremi-img', { origin: 'left' });
ScrollReveal().reveal('.sobremi p, .sobremi-contenido', { origin: 'right' });