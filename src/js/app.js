/**
 * ============================================================
 * DisneyStream
 * app.js
 * Jellyfin 10.11.x
 * ============================================================
 */

import { initHero } from "./hero.js";
import { initNavigation } from "./navigation.js";
import { initCards } from "./cards.js";
import { initAnimations } from "./animations.js";
import { initDetails } from "./details.js";
import { initPlayer } from "./player.js";
import { initSearch } from "./search.js";
import { initProfile } from "./profile.js";

class DisneyStream {

    constructor() {

        this.version = "0.1.0";

    }

    async start() {

        console.log(
            `%cDisneyStream ${this.version}`,
            "color:#1ea7ff;font-size:18px;font-weight:bold;"
        );

        await this.waitForJellyfin();

        this.initialize();

    }

    async waitForJellyfin() {

        return new Promise(resolve => {

            const timer = setInterval(() => {

                if (document.querySelector(".skinHeader")) {

                    clearInterval(timer);

                    resolve();

                }

            },200);

        });

    }

    initialize() {

        initNavigation();

        initHero();

        initCards();

        initAnimations();

        initDetails();

        initPlayer();

        initSearch();

        initProfile();

        console.log("DisneyStream loaded.");

    }

}

new DisneyStream().start();