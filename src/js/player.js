/**
 * ============================================================
 * DisneyStream
 * player.js
 * ============================================================
 */

export function initPlayer() {

    console.log("DisneyStream Player initialized");

    const observer = new MutationObserver(() => {

        setupPlayer();

    });

    observer.observe(document.body, {

        childList: true,
        subtree: true

    });

    setupPlayer();

}

/* ============================================================
   SETUP
============================================================ */

function setupPlayer() {

    const player = document.querySelector("video");

    if (!player)
        return;

    if (player.dataset.dsLoaded)
        return;

    player.dataset.dsLoaded = "true";

    registerEvents(player);

    createOverlay(player);

}

/* ============================================================
   PLAYER EVENTS
============================================================ */

function registerEvents(video) {

    video.addEventListener("play", () => {

        console.log("▶ Playing");

    });

    video.addEventListener("pause", () => {

        console.log("⏸ Paused");

    });

    video.addEventListener("ended", () => {

        console.log("■ Finished");

    });

    video.addEventListener("timeupdate", () => {

        updateProgress(video);

    });

}

/* ============================================================
   OVERLAY
============================================================ */

function createOverlay(video) {

    if(document.querySelector(".ds-player-overlay"))
        return;

    const overlay=document.createElement("div");

    overlay.className="ds-player-overlay";

    overlay.innerHTML=`

        <button class="ds-skip-intro">

            Skip Intro

        </button>

        <button class="ds-next">

            Next Episode

        </button>

    `;

    video.parentElement.appendChild(overlay);

}

/* ============================================================
   PROGRESS
============================================================ */

function updateProgress(video){

    const percent=(video.currentTime/video.duration)*100;

    console.log(percent.toFixed(1)+"%");

}

/* ============================================================
   PLAY
============================================================ */

export function play(){

    const video=document.querySelector("video");

    if(video)
        video.play();

}

/* ============================================================
   PAUSE
============================================================ */

export function pause(){

    const video=document.querySelector("video");

    if(video)
        video.pause();

}

/* ============================================================
   TOGGLE
============================================================ */

export function toggle(){

    const video=document.querySelector("video");

    if(!video)
        return;

    if(video.paused)
        video.play();
    else
        video.pause();

}

/* ============================================================
   VOLUME
============================================================ */

export function volume(value){

    const video=document.querySelector("video");

    if(video)
        video.volume=value;

}

/* ============================================================
   SEEK
============================================================ */

export function seek(seconds){

    const video=document.querySelector("video");

    if(video)
        video.currentTime+=seconds;

}

/* ============================================================
   FULLSCREEN
============================================================ */

export function fullscreen(){

    const video=document.querySelector("video");

    if(!video)
        return;

    if(video.requestFullscreen){

        video.requestFullscreen();

    }

}

/* ============================================================
   BUTTON EVENTS
============================================================ */

document.addEventListener("click",(event)=>{

    if(event.target.classList.contains("ds-skip-intro")){

        seek(90);

    }

    if(event.target.classList.contains("ds-next")){

        console.log("Next Episode");

    }

});

/* ============================================================
   KEYBOARD
============================================================ */

document.addEventListener("keydown",(event)=>{

    switch(event.code){

        case "Space":

            event.preventDefault();

            toggle();

            break;

        case "ArrowRight":

            seek(10);

            break;

        case "ArrowLeft":

            seek(-10);

            break;

        case "KeyF":

            fullscreen();

            break;

    }

});