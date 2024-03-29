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


class mainSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <section class="section section-white">
      <h2>About</h2>
      <p>
        The Avengers (also known as Avengers Assemble in the UK and Ireland) is
        a 2012 superhero film and the sixth film in the Marvel Cinematic
        Universe, based on the superhero team the Avengers created by Stan Lee
        and Jack Kirby. The film is a crossover of all the films independently
        produced by Marvel Studios set within the Marvel Cinematic Universe,
        namely
        <b style="color: darkred"
          >Iron Man (2008), The Incredible Hulk (2008), Iron Man 2 (2010), Thor
          (2011) and Captain America: The First Avenger (2011).</b
        >
        In the film,<b>
          S.H.I.E.L.D. director Nick Fury assembles Iron Man, Captain America,
          Hulk, Thor, Black Widow and Hawkeye to battle Thor's adoptive brother,
          Loki,</b
        >
      </p>

      <p>
        The Avengers was directed by
        <b>
          Joss Whedon and stars Robert Downey, Jr., Chris Evans, Mark Ruffalo,
          Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Tom Hiddleston and
          Samuel L. Jackson.</b
        >
        The film was successful financially and critically and broke box-office
        records as the biggest weekend opening for a film and the fastest film
        to gross $1 billion worldwide. The film is statistically the most
        successful film released by Walt Disney to date and it regarded by many
        as one of the greatest superhero films of all time. The film has been
        nominated for the Academy Award for Best Visual Effects.
      </p>
    </section>
        `
    }
}
customElements.define('main-section', mainSection);

class captainAmerica extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="section section-white">
        <h2>Info</h2>
        <p>
          During WWII, the patriotic Steve Rogers was offered a place in the
          military's top operation: Rebirth. Injected with an experimental
          super-serum, Rogers emerged from the treatment with heightened
          endurance, strength, and reaction time. With extensive training and an
          indestructible Vibranium shield, Rogers soon became the country's
          ultimate weapon: CAPTAIN AMERICA! Though frozen in ice during a
          climactic battle toward the end of the war, Rogers was discovered and
          revived decades later. Now the living legend continues the war against
          evil in modern times as a member of The Avengers!
        </p>
        <h3 class="power">Captain American's Powers and Abilities:</h3>
        <p>
          Peak physical condition, with heightened strength, endurance & agility
          Master hand-to-hand fighter Skilled military leader & strategist
          Equipped with virtually indestructible Vibranium shield.
        </p>
      </section>
        `
    }
}
customElements.define('captain-america', captainAmerica);


class hulkSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="section section-white">
        <h2>Info</h2>
        <p>
          A massive dose of gamma radiation transformed the brilliant but meek
          scientist Bruce Banner's DNA, awakening the hidden, adrenaline-fed hero
          in his genes... HULK! A hero of few words and incredible strength, the
          Hulk has long been pursued by those who want to use his immense power
          for their own purposes, or by those who thought the Jade Giant's anger
          was too dangerous to be controlled. Now, as a member of the Avengers,
          Hulk helps smash the unimaginable threats that no Hero could face alone,
          hoping to at least prove to the world that he is the strongest HERO
          there is!
        </p>
        <h3 class="power">Hulk's Powers and Abilities:</h3>
        <p>
          Incredible superhuman strength, durability, and healing factor Becomes
          more powerful as anger increases As Banner, possesses a genius-level
          intellect & is an expert in multiple scientific fields, particularly the
          studies of physics & radiation.
        </p>
      </section>
        `
    }
}
customElements.define('hulk-section', hulkSection);


class spidySection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="section section-white">
        <h2>Info</h2>
        <p>
          Peter Parker was an orphaned teenage boy who lived in Queens, New York
          with his Aunt May and Uncle Ben. He was a shy boy, but highly
          intelligent and excelled in science. He was often teased by other more
          popular kids like longtime nemesis Flash Thompson, but his life was soon
          to change on a visit to the science museum. Peter later finds out that
          the same robber that he could have stopped at the television studio
          attempted to rob his aunt and uncle's residence, and his Uncle Ben was
          killed in the struggle. The words of his late uncle, "with great power
          there must also come great responsibility,” drive Peter to fight crime
          instead of chasing fame. Spider-Man was truly born.
        </p>
        <h3 class="power">Spider-Man's Powers</h3>
        <p>
          Spider-Man has spider-like abilities including superhuman strength and
          the ability to cling to most surfaces. He is also extremely agile and
          has amazing reflexes. Spider-Man also has a “spider sense,” that warns
          him of impending danger. In addition to this, the new, “Iron Spidey,”
          suit has enhanced his strength further and gives protection from damage
        </p>
      </section> 
        `
    }
}
customElements.define('spidy-section', spidySection);

class ironmanSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="section section-white">
        <h2>Info</h2>
        <p>
          When billionaire industrialist Tony Stark dons his sophisticated
          steel-mesh armor, he becomes a living high-tech weapon - the world's
          greatest fighting machine. Tony has primed his ultra modern creation for
          waging state of the art campaigns, attaining sonic flight, and defending
          the greater good! He is the Armored Avenger - driven by a heart that is
          part machine, but all hero! He is the INVINCIBLE IRON MAN!
        </p>
        <h3 class="power">Iron Man's Powers and Abilities:</h3>
        <p>
          Wears modular arc reactor-powered Iron Man armor, granting superhuman
          strength & durability, the ability to fly & project Repulsor blasts
          Armor is also outfitted with complex tech, including a cutting-edge
          artificial intelligence, sophisticated sensor systems & other gadgetry
          Genius-level intellect, with particular aptitude in invention &
          engineering.
        </p>
      </section>
        `
    }
}
customElements.define('ironman-section', ironmanSection);

class thorSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="section section-white">
      <h2>Info</h2>
      <p>
        Nordic legend tells the tale of the son of Odin, the heir to the throne
        of Asgard - he is THOR, renowned as the mightiest hero of mythology!
        Thor's strength, endurance, and quest for battle are far greater than
        his Asgardian brethren. The mighty Thor wields an enchanted Uru hammer,
        Mjolnir, and is master of thunder and lightning.
      </p>
      <h3 class="power">Thor's Powers and Abilities:</h3>
      <p>
        Superhuman strength, speed, endurance & resistance to injury Member of
        the otherworldly & virtually immortal Asgardian race Wields the
        enchanted Uru-forged hammer Mjolnir, which grants mastery over the
        elements of thunder & lightning, as well as the ability to fly & open
        interdimensional gateways.
      </p>
    </section>

        `
    }
}
customElements.define('thor-section', thorSection);


class drStrangeSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="section section-white">
      <h2>Info</h2>
      <p>
        Distinguished neurosurgeon Doctor Stephen Strange's self-important
        worldview was shattered, along with his steady operating hands, in a
        fateful car accident. Desperate to heal his injuries and pride, Strange
        sought out a legendary safe known as the Ancient One, becoming a pupil
        of the mystic arts. Learning that his true worth had always come from
        within, Strange uncovered his full potential and was chosen to become
        the Sorcerer Supreme, the world's pre-eminent defender against the
        darkness that lurks beyond.
      </p>
      <h3 class="power">Powers and abilities:</h3>
      <p>
        Master of the Mystic Arts, with unparalleled knowledge of arcade spells
        and enchantments, including teleportation, astral projection and
        dimensional manipulation Vast collection of legendary artifacts, each
        with unique powers - includes the all-seeing Eye of Agamotto, the
        flight-enabling Cloak of Levitation, and the fabled Book of the
        Vishanti.
      </p>
    </section>

        `
    }
}
customElements.define('strange-section', drStrangeSection);

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