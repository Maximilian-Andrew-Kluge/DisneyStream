/**
 * ============================================================
 * DisneyStream
 * details.js
 * ============================================================
 */

export function initDetails() {

    console.log("Details initialized");

    const observer = new MutationObserver(() => {

        setupDetails();

    });

    observer.observe(document.body, {

        childList: true,
        subtree: true

    });

    setupDetails();

}

/* ============================================================
   SETUP
============================================================ */

function setupDetails() {

    const page = document.querySelector(".detailPageWrapper");

    if (!page)
        return;

    if (page.dataset.dsLoaded)
        return;

    page.dataset.dsLoaded = "true";

    createHero(page);

    createMeta(page);

    animatePage(page);

}

/* ============================================================
   HERO
============================================================ */

function createHero(page) {

    let hero = page.querySelector(".ds-detail-hero");

    if (hero)
        return;

    hero = document.createElement("div");

    hero.className = "ds-detail-hero";

    hero.innerHTML = `

        <div class="ds-detail-backdrop"></div>

        <div class="ds-detail-overlay"></div>

    `;

    page.prepend(hero);

}

/* ============================================================
   META
============================================================ */

function createMeta(page) {

    const title = page.querySelector(".itemName");

    if (!title)
        return;

    title.classList.add("ds-title");

    const overview = page.querySelector(".overview");

    if (overview)
        overview.classList.add("ds-overview");

}

/* ============================================================
   BACKDROP
============================================================ */

export function setBackdrop(image) {

    const backdrop = document.querySelector(".ds-detail-backdrop");

    if (!backdrop)
        return;

    backdrop.style.backgroundImage = `url("${image}")`;

}

/* ============================================================
   TITLE
============================================================ */

export function setTitle(text) {

    const title = document.querySelector(".ds-title");

    if (title)
        title.textContent = text;

}

/* ============================================================
   DESCRIPTION
============================================================ */

export function setDescription(text) {

    const overview = document.querySelector(".ds-overview");

    if (overview)
        overview.textContent = text;

}

/* ============================================================
   BUTTONS
============================================================ */

export function addButtons() {

    const container = document.querySelector(".detailPagePrimaryContainer");

    if (!container)
        return;

    if (container.querySelector(".ds-buttons"))
        return;

    const buttons = document.createElement("div");

    buttons.className = "ds-buttons";

    buttons.innerHTML = `

        <button class="ds-play">

            ▶ Play

        </button>

        <button class="ds-trailer">

            Trailer

        </button>

        <button class="ds-favorite">

            ❤ Favorite

        </button>

    `;

    container.appendChild(buttons);

}

/* ============================================================
   ANIMATION
============================================================ */

function animatePage(page) {

    page.animate([

        {

            opacity:0,

            transform:"translateY(20px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:400,

        easing:"ease"

    });

}

/* ============================================================
   EVENTS
============================================================ */

document.addEventListener("click",(event)=>{

    if(event.target.classList.contains("ds-play")){

        console.log("Play clicked");

    }

    if(event.target.classList.contains("ds-trailer")){

        console.log("Trailer clicked");

    }

    if(event.target.classList.contains("ds-favorite")){

        console.log("Favorite clicked");

    }

});