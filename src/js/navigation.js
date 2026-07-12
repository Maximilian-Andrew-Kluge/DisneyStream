/**
 * ============================================================
 * DisneyStream
 * navigation.js
 * ============================================================
 */

export function initNavigation() {

    console.log("Navigation initialized");

    const drawer = document.querySelector(".mainDrawer");

    if (!drawer) return;

    enableHover(drawer);
    highlightCurrent();
    animateIcons();

}

/* ============================================================
   EXPAND
============================================================ */

function enableHover(drawer){

    drawer.addEventListener("mouseenter",()=>{

        drawer.classList.add("ds-expanded");

    });

    drawer.addEventListener("mouseleave",()=>{

        drawer.classList.remove("ds-expanded");

    });

}

/* ============================================================
   ACTIVE ITEM
============================================================ */

function highlightCurrent(){

    const items=document.querySelectorAll(".navMenuOption");

    items.forEach(item=>{

        item.classList.remove("ds-active");

        if(item.classList.contains("navMenuOption-selected")){

            item.classList.add("ds-active");

        }

    });

}

/* ============================================================
   ICON ANIMATION
============================================================ */

function animateIcons(){

    const icons=document.querySelectorAll(".navMenuOption i");

    icons.forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.animate([

                {
                    transform:"scale(1)"
                },

                {
                    transform:"scale(1.15)"
                },

                {
                    transform:"scale(1)"
                }

            ],{

                duration:250

            });

        });

    });

}

/* ============================================================
   PAGE CHANGE
============================================================ */

const observer=new MutationObserver(()=>{

    highlightCurrent();

});

observer.observe(document.body,{

    childList:true,
    subtree:true

});