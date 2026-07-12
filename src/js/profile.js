/**
 * ============================================================
 * DisneyStream
 * profile.js
 * ============================================================
 */

export function initProfile() {

    console.log("DisneyStream Profile initialized");

    const observer = new MutationObserver(() => {

        setupProfiles();

    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    setupProfiles();

}

/* ============================================================
   PROFILE SETUP
============================================================ */

function setupProfiles() {

    const users = document.querySelectorAll(".userCard");

    users.forEach(user => {

        if (user.dataset.dsLoaded)
            return;

        user.dataset.dsLoaded = "true";

        addHover(user);

        addStatus(user);

        animate(user);

    });

}

/* ============================================================
   HOVER
============================================================ */

function addHover(card) {

    card.addEventListener("mouseenter", () => {

        card.classList.add("ds-profile-hover");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("ds-profile-hover");

    });

}

/* ============================================================
   STATUS
============================================================ */

function addStatus(card) {

    if(card.querySelector(".ds-status"))
        return;

    const status=document.createElement("div");

    status.className="ds-status";

    status.innerHTML=`
        <span class="online"></span>
        Active
    `;

    card.appendChild(status);

}

/* ============================================================
   ANIMATION
============================================================ */

function animate(card){

    card.animate([

        {
            opacity:0,
            transform:"translateY(20px)"
        },

        {
            opacity:1,
            transform:"translateY(0)"
        }

    ],{

        duration:350,
        easing:"ease"

    });

}

/* ============================================================
   PROFILE CLICK
============================================================ */

document.addEventListener("click",(event)=>{

    const card=event.target.closest(".userCard");

    if(!card)
        return;

    console.log("Selected profile:",card);

});

/* ============================================================
   CHANGE AVATAR
============================================================ */

export function changeAvatar(url){

    const avatar=document.querySelector(".userImage img");

    if(!avatar)
        return;

    avatar.src=url;

}

/* ============================================================
   CHANGE NAME
============================================================ */

export function changeName(name){

    const label=document.querySelector(".userName");

    if(label)
        label.textContent=name;

}

/* ============================================================
   FAVORITE COLOR
============================================================ */

export function setAccent(color){

    document.documentElement.style
        .setProperty("--primary",color);

}

/* ============================================================
   LAST WATCHED
============================================================ */

export function updateLastWatched(title){

    let last=document.querySelector(".ds-last");

    if(!last){

        last=document.createElement("div");

        last.className="ds-last";

        document.body.appendChild(last);

    }

    last.innerHTML=`
        Last watched:
        <strong>${title}</strong>
    `;

}