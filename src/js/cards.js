/**
 * ============================================================
 * DisneyStream
 * cards.js
 * ============================================================
 */

export function initCards() {

    console.log("Cards initialized");

    const observer = new MutationObserver(() => {
        setupCards();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    setupCards();

}

/* ============================================================
   INITIALIZE
============================================================ */

function setupCards() {

    const cards = document.querySelectorAll(".cardBox");

    cards.forEach(card => {

        if (card.dataset.dsLoaded)
            return;

        card.dataset.dsLoaded = "true";

        addHover(card);

        addFocus(card);

        animate(card);

    });

}

/* ============================================================
   HOVER
============================================================ */

function addHover(card) {

    card.addEventListener("mouseenter", () => {

        card.classList.add("ds-card-hover");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("ds-card-hover");

    });

}

/* ============================================================
   KEYBOARD
============================================================ */

function addFocus(card) {

    card.tabIndex = 0;

    card.addEventListener("focus", () => {

        card.classList.add("ds-card-hover");

    });

    card.addEventListener("blur", () => {

        card.classList.remove("ds-card-hover");

    });

}

/* ============================================================
   ANIMATION
============================================================ */

function animate(card) {

    card.animate([

        {
            opacity: 0,
            transform: "translateY(20px)"
        },

        {
            opacity: 1,
            transform: "translateY(0)"
        }

    ], {

        duration: 350,
        easing: "ease"

    });

}

/* ============================================================
   PLAY OVERLAY
============================================================ */

export function showPlay(card) {

    let play = card.querySelector(".ds-play-overlay");

    if (play)
        return;

    play = document.createElement("div");

    play.className = "ds-play-overlay";

    play.innerHTML = `
        <button class="ds-play-button">
            ▶
        </button>
    `;

    card.appendChild(play);

}

/* ============================================================
   REMOVE OVERLAY
============================================================ */

export function removePlay(card) {

    const play = card.querySelector(".ds-play-overlay");

    if (play)
        play.remove();

}

/* ============================================================
   CLICK
============================================================ */

document.addEventListener("click", event => {

    const button = event.target.closest(".ds-play-button");

    if (!button)
        return;

    const card = button.closest(".cardBox");

    if (!card)
        return;

    console.log("Play", card);

});

/* ============================================================
   CARD VISIBILITY
============================================================ */

const visibility = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("ds-visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".cardBox").forEach(card => {

    visibility.observe(card);

});