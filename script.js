class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="header">
        <div class="logo_container">
          <img
            src="./images/main-logo.png"
            alt="Raunak technical logo"
            class="logo"
          />
        </div>
        <nav class="navbar">
          <ul class="navbar-lists">
            <li>
              <a id="home" class="navbar-link home-link" href="#main">Home</a>
            </li>
            <li>
              <a id="about" class="navbar-link about-link" href="#footer"
                >About</a
              >
            </li>
            <li>
              <a
                id="porfolio"
                class="navbar-link portfolio-link"
                href="#portfolio-section"
                >Portfolio</a
              >
            </li>
            <li>
              <a
                id="contact"
                class="navbar-link contact-link"
                href="#contact-section"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
  
        <div class="mobile-navbar-btn">
          <span class="mobile-nav-icon" name="menu-outline"
            ><img class="util-logo" src="images/menu-logo.png" alt="menu"
          /></span>
          <span class="mobile-nav-icon" name="close-outline"
            ><img class="util-logo" src="images/close-btn.png" alt="close"
          /></span>
        </div>
      </header>
        `
    }
}

customElements.define('my-header', myHeader);




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