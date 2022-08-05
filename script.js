const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const homebtn = document.getElementById('home');
const aboutbtn = document.getElementById('about');
const contactbtn = document.getElementById('contact');
const portfolio_btn = document.getElementById('porfolio');


console.log(portfolio_btn);
console.log(homebtn);
const closeNav = () => {
    // alert("hi");
    nav_header.classList.remove("active");
    
};
const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
    
};

aboutbtn.addEventListener("click", () => closeNav());
contactbtn.addEventListener("click", () => closeNav());
portfolio_btn.addEventListener("click", () => closeNav());
homebtn.addEventListener("click", () => closeNav());
mobile_nav.addEventListener("click", () => toggleNavbar());