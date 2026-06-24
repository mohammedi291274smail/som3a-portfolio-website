let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); 

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

window.onscroll = () => {
    menu.classList.remove('bx-x'); 
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer' , 'Frontend Developer' , 'Competitive Programmer'],
    typeSpeed: 80,
    backSpeed: 80, 
    backDelay: 1200,
    loop: true , 
});

emailjs.init({
    publicKey: "L-q3382GlfiY5zsB_",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_vrpc5y9",
        "template_j7um44k",
        form
    )
    .then(() => {

        alert("Message Sent Successfully!");
        form.reset();

    })
    .catch((error) => {

        console.log(error);
        alert("Failed To Send");

    });

});