/**
 * ============================================================
 * DisneyStream
 * animations.js
 * ============================================================
 */

export function initAnimations() {

    console.log("DisneyStream Animations initialized");

    animatePage();

    animateCards();

    animateButtons();

    observeNewElements();

}

/* ============================================================
   PAGE
============================================================ */

function animatePage() {

    document.body.animate(

        [

            {
                opacity:0
            },

            {
                opacity:1
            }

        ],

        {

            duration:350,
            easing:"ease"

        }

    );

}

/* ============================================================
   CARDS
============================================================ */

function animateCards() {

    const cards=document.querySelectorAll(".cardBox");

    cards.forEach((card,index)=>{

        card.animate(

            [

                {

                    opacity:0,

                    transform:"translateY(25px)"

                },

                {

                    opacity:1,

                    transform:"translateY(0)"

                }

            ],

            {

                duration:350,

                delay:index*30,

                fill:"forwards"

            }

        );

    });

}

/* ============================================================
   BUTTONS
============================================================ */

function animateButtons(){

    const buttons=document.querySelectorAll("button");

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.animate(

                [

                    {

                        transform:"scale(1)"

                    },

                    {

                        transform:"scale(1.06)"

                    }

                ],

                {

                    duration:180,

                    fill:"forwards"

                }

            );

        });

        button.addEventListener("mouseleave",()=>{

            button.animate(

                [

                    {

                        transform:"scale(1.06)"

                    },

                    {

                        transform:"scale(1)"

                    }

                ],

                {

                    duration:180,

                    fill:"forwards"

                }

            );

        });

    });

}

/* ============================================================
   OBSERVER
============================================================ */

function observeNewElements(){

    const observer=new MutationObserver(()=>{

        animateCards();

    });

    observer.observe(document.body,{

        childList:true,

        subtree:true

    });

}