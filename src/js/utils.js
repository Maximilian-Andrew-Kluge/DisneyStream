/**
 * ============================================================
 * DisneyStream
 * utils.js
 * ============================================================
 */

export function qs(selector){

    return document.querySelector(selector);

}

export function qsa(selector){

    return document.querySelectorAll(selector);

}

export function create(tag,className){

    const element=document.createElement(tag);

    if(className)
        element.className=className;

    return element;

}

export function sleep(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}

export function random(min,max){

    return Math.floor(

        Math.random()*(max-min+1)

    )+min;

}

export function debounce(fn,delay=300){

    let timer;

    return (...args)=>{

        clearTimeout(timer);

        timer=setTimeout(()=>{

            fn(...args);

        },delay);

    };

}

export function formatTime(seconds){

    seconds=Math.floor(seconds);

    const h=Math.floor(seconds/3600);

    const m=Math.floor((seconds%3600)/60);

    const s=seconds%60;

    if(h>0){

        return `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

    }

    return `${m}:${String(s).padStart(2,"0")}`;

}

export function clamp(value,min,max){

    return Math.min(

        Math.max(value,min),

        max

    );

}

export function isMobile(){

    return window.innerWidth<900;

}