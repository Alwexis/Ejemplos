/*

*/

// Important variables. The second variable is 4 the transition effect. No really necessesary if you don't wanna have one.
const __BODY__ = document.querySelector('body');
const __TRANSITION_SHADOW__ = document.querySelector('#transition-shadow');
let __PAGE__ = '';
let __ACTUAL_SCROLLING__ = 0;
let __ACTUAL_PAGE__ = 0;
let __CHANGING_PAGE__ = true;
const __PAGES__ = [
    'index',
    'about',
    'stack',
    'projects',
    'extra'
];

// This code must be on a global javascript file, since every page will use it.
function changePage(page, confirm) {
    __PAGE__ = page;
    __TRANSITION_SHADOW__.classList.toggle('transition');
    if (confirm) {
        __CHANGING_PAGE__ = true;
        window.location.replace('./' + page + '.html');
    }
}

// Detect when the transition animation starts, so 0.2 seconds before it ends, it changes the page.
__BODY__.addEventListener('animationstart', (e) => {
    if (e.animationName === 'changePageTransition') {
        if (__PAGE__ === '') return;
        setTimeout(() => {
            changePage(__PAGE__, true);
        }, 800)
    }
});

// Touch & Click handlers
window.onwheel = (e) => {
    if (__CHANGING_PAGE__) return;
    if (__ACTUAL_PAGE__ === 0 && e.deltaY < 0) return;
    if (__ACTUAL_PAGE__ === __PAGES__.length - 1 && e.deltaY > 0) return;
    __ACTUAL_SCROLLING__ += e.deltaY;
    if (__ACTUAL_SCROLLING__ >= 300) {
        if (__ACTUAL_PAGE__ < __PAGES__.length - 1) {
            __CHANGING_PAGE__ = true;
            __ACTUAL_SCROLLING__ = 0;
            __ACTUAL_PAGE__++;
            changePage(__PAGES__[__ACTUAL_PAGE__], false);
        }
    } else if (__ACTUAL_SCROLLING__ <= -300) {
        if (__ACTUAL_PAGE__ > 0) {
            __CHANGING_PAGE__ = true;
            __ACTUAL_SCROLLING__ = 0;
            __ACTUAL_PAGE__--;
            changePage(__PAGES__[__ACTUAL_PAGE__], false);
        }
    }
}

__BODY__.ontouchstart = (e) => {
    // I'm storing the Y axis location of the first touch.
    __BODY__.setAttribute('firstYTouchLocation', e.touches[0].clientY)
}

__BODY__.ontouchend = (e) => {
    // We prevent to change the page if there's a transition in course.
    if (__CHANGING_PAGE__) return;
    const firstYTouchLocation = Math.round(__BODY__.getAttribute('firstYTouchLocation'));
    const currentYTouchLocation = Math.round(e.changedTouches[0].clientY);
    /*
    * If the touch first location is greater than the last one, that means that the user is going up,
    * otherwise, the user is going down. 
    */
    if (Math.abs(firstYTouchLocation - currentYTouchLocation) > 150) {
        if (firstYTouchLocation > currentYTouchLocation) {
            if (__ACTUAL_PAGE__ < __PAGES__.length - 1) {
                __ACTUAL_PAGE__++;
                changePage(__PAGES__[__ACTUAL_PAGE__], false);
            }
        } else {
            if (__ACTUAL_PAGE__ > 0) {
                __ACTUAL_PAGE__--;
                changePage(__PAGES__[__ACTUAL_PAGE__], false);
            }
        }
    }
    __BODY__.setAttribute('firstYTouchLocation', 0);
}

__BODY__.onmousedown = (e) => {
    __BODY__.setAttribute('firstYClickLocation', e.clientY)
}

__BODY__.onmouseup = (e) => {
    if (__CHANGING_PAGE__) return;
    const firstYClickLocation = Math.round(__BODY__.getAttribute('firstYClickLocation'));
    const currentYClickLocation = Math.round(e.clientY);
    // In this case, we use a minor amount of difference between the 2 locations, since the desktop screen has a "minor" relative height than a mobile.
    if (Math.abs(firstYClickLocation - currentYClickLocation) > 100) {
        if (firstYClickLocation > currentYClickLocation) {
            if (__ACTUAL_PAGE__ < __PAGES__.length - 1) {
                __ACTUAL_PAGE__++;
                changePage(__PAGES__[__ACTUAL_PAGE__], false);
            }
        } else {
            if (__ACTUAL_PAGE__ > 0) {
                __ACTUAL_PAGE__--;
                changePage(__PAGES__[__ACTUAL_PAGE__], false);
            }
        }
    }
    __BODY__.setAttribute('firstYClickLocation', 0);
}

// Probably most important thing on the code
// This block of code will detect in which page the user is seeing, when the transition animation ends so we show up the page, etc.
// In the past commit, we needed to put this on every page's script file, but not anymore p:
__BODY__.onload = () => {
    __ACTUAL_SCROLLING__ = 0;
    let page = window.location.pathname.split('/').pop().split('.')[0];
    __ACTUAL_PAGE__ = __PAGES__.indexOf(page);
    __BODY__.addEventListener('animationend', (e) => {
        if (e.animationName === 'changePageTransition') {
            if (__TRANSITION_SHADOW__.classList.contains('transitionEnd') || __PAGE__ === __PAGES__[__ACTUAL_PAGE__]) {
                __TRANSITION_SHADOW__.classList.remove('transitionEnd');
                __CHANGING_PAGE__ = false;
            }
        }
    });
}

/* CSS */
/*
#transition-shadow {
    height: 100%;
    width: 100%;
    background-color: black;
    position: absolute;
    opacity: 0;
    z-index: 999;
    display: none;
}

.transition {
    animation-name: changePageTransition;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    display: initial !important;
}

.transitionEnd {
    animation-name: changePageTransition;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-direction: reverse;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    display: initial !important;
}

@keyframes changePageTransition {
    from { opacity: 0; }
    to { opacity: 1; }
}
*/
