/**
 * ============================================================
 * DisneyStream
 * search.js
 * ============================================================
 */

export function initSearch() {

    console.log("DisneyStream Search initialized");

    const observer = new MutationObserver(() => {

        setupSearch();

    });

    observer.observe(document.body, {

        childList: true,
        subtree: true

    });

    setupSearch();

}

/* ============================================================
   SEARCH
============================================================ */

function setupSearch() {

    const input = document.querySelector("input[type='search']");

    if (!input)
        return;

    if (input.dataset.dsLoaded)
        return;

    input.dataset.dsLoaded = "true";

    input.placeholder = "Search movies, shows and collections...";

    input.addEventListener("input", handleSearch);

}

/* ============================================================
   SEARCH INPUT
============================================================ */

function handleSearch(event) {

    const value = event.target.value.trim();

    if (value.length < 2) {

        clearSuggestions();

        return;

    }

    console.log("Searching:", value);

    showLoading();

}

/* ============================================================
   LOADING
============================================================ */

function showLoading() {

    let loading = document.querySelector(".ds-search-loading");

    if (loading)
        return;

    loading = document.createElement("div");

    loading.className = "ds-search-loading";

    loading.innerHTML = "Searching...";

    document.body.appendChild(loading);

}

/* ============================================================
   CLEAR
============================================================ */

function clearSuggestions() {

    const loading = document.querySelector(".ds-search-loading");

    if (loading)
        loading.remove();

}

/* ============================================================
   RESULTS
============================================================ */

export function showResults(results) {

    let container = document.querySelector(".ds-search-results");

    if (!container) {

        container = document.createElement("div");

        container.className = "ds-search-results";

        document.body.appendChild(container);

    }

    container.innerHTML = "";

    results.forEach(item => {

        const card = document.createElement("div");

        card.className = "ds-search-card";

        card.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="ds-search-info">
                <h3>${item.title}</h3>
                <p>${item.type}</p>
            </div>
        `;

        container.appendChild(card);

    });

}

/* ============================================================
   CLEAR RESULTS
============================================================ */

export function clearResults() {

    const container = document.querySelector(".ds-search-results");

    if (container)
        container.remove();

}

/* ============================================================
   ESC KEY
============================================================ */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        clearResults();

        clearSuggestions();

    }

});