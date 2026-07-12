/**
 * ============================================================
 * DisneyStream
 * hero.js
 * ============================================================
 */

export function initHero() {

    console.log("DisneyStream Hero initialized.");

    const page = document.querySelector(".homePage");

    if (!page) return;

    // Hero bereits vorhanden?
    if (document.querySelector(".ds-hero")) return;

    const hero = document.createElement("section");
    hero.className = "ds-hero";

    hero.innerHTML = `
        <div class="ds-hero-backdrop"></div>

        <div class="ds-hero-overlay"></div>

        <div class="ds-hero-content">

            <span class="ds-badge">
                Featured
            </span>

            <h1 class="ds-title">
                Welcome to DisneyStream
            </h1>

            <p class="ds-description">
                Browse your movies and TV shows with a modern streaming interface.
            </p>

            <div class="ds-buttons">

                <button class="ds-play">
                    ▶ Play
                </button>

                <button class="ds-info">
                    More Info
                </button>

            </div>

        </div>
    `;

    page.prepend(hero);

    loadBackdrop();

}

/* ============================================================
   LOAD DEFAULT BACKDROP
============================================================ */

function loadBackdrop() {

    const backdrop = document.querySelector(".ds-hero-backdrop");

    if (!backdrop) return;

    backdrop.style.backgroundImage =
        "url('/web/assets/img/banner.jpg')";

}

/* ============================================================
   CHANGE TITLE
============================================================ */

export function setHero(title, description) {

    const heroTitle = document.querySelector(".ds-title");

    const heroDescription =
        document.querySelector(".ds-description");

    if (heroTitle)
        heroTitle.textContent = title;

    if (heroDescription)
        heroDescription.textContent = description;

}

/* ============================================================
   CHANGE BACKDROP
============================================================ */

export function setBackdrop(url) {

    const backdrop =
        document.querySelector(".ds-hero-backdrop");

    if (!backdrop) return;

    backdrop.style.backgroundImage =
        `url("${url}")`;

}

/* ============================================================
   PLAY BUTTON
============================================================ */

document.addEventListener("click",(event)=>{

    if(event.target.classList.contains("ds-play")){

        console.log("Play clicked");

    }

});

/* ============================================================
   INFO BUTTON
============================================================ */

document.addEventListener("click",(event)=>{

    if(event.target.classList.contains("ds-info")){

        console.log("More info clicked");

    }

});