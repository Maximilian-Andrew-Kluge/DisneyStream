/**
 * ============================================================
 * DisneyStream
 * index.js
 * Entry Point
 * Jellyfin 10.11.x
 * ============================================================
 */

(function () {
    "use strict";

    console.log("%cDisneyStream v0.1.0", "color:#1ea7ff;font-size:18px;font-weight:bold;");

    function waitForJellyfin() {

        const timer = setInterval(() => {

            if (document.querySelector(".skinHeader")) {

                clearInterval(timer);

                initialize();

            }

        }, 200);

    }

    function initialize() {

        console.log("Initializing DisneyStream...");

        if (window.DisneyStreamNavigation)
            window.DisneyStreamNavigation();

        if (window.DisneyStreamHero)
            window.DisneyStreamHero();

        if (window.DisneyStreamCards)
            window.DisneyStreamCards();

        if (window.DisneyStreamDetails)
            window.DisneyStreamDetails();

        if (window.DisneyStreamPlayer)
            window.DisneyStreamPlayer();

        if (window.DisneyStreamSearch)
            window.DisneyStreamSearch();

        if (window.DisneyStreamProfile)
            window.DisneyStreamProfile();

        if (window.DisneyStreamAnimations)
            window.DisneyStreamAnimations();

        console.log("DisneyStream loaded.");

    }

    waitForJellyfin();

})();