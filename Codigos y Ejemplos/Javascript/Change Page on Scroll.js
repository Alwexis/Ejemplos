/*
  In this case, in order to test I've created an Element that works as a Shadow Transition, so if you don't need it, you can safely remove it.
  The way it works is via "root" elements or a kind of "components" that'll be always with display: none; style (everyone but the main). So, when you scroll
  it'll check if there's a next component (or a previous one) to determinate if changing page or not.
  It only works on computer rn since I don't really wanted to do it on mobile, but if you wanna do it by urself, use the window.ontouchmove event instead of
  the window.onwheel one 😺
  
  Here's a demo video: https://youtu.be/Ke3Dlewqi4Q
*/

window.onload = () => {
    __pages__.forEach(page => {
        if (page.name !== 'home') {
            document.getElementById(page.elementId).style.display = 'none';
        }
    });
}

window.onwheel = async (e) => {
    await scrollDesktopHandler(e);
}

let __changingPage__ = false;
let __actualScroll__ = 0;
let __pages__ = [
    { name: 'home', minScroll: 0, maxScroll: 0, previous: null, next: 'about', elementId: 'home' },
    { name: 'about', minScroll: 0, maxScroll: 10, previous: 'home', next: 'test', elementId: 'about' },
    { name: 'test', minScroll: 10, maxScroll: 20, previous: 'about', next: null, elementId: 'test' },
]
let __actualPage__ = __pages__[0];
const __transitionShadow__ = document.getElementById('transition-shadow');

async function scrollDesktopHandler(e) {
    let scrollValue = Math.floor(e.deltaY ? e.deltaY / 100 : e.wheelDeltaY / 120);
    //* Handling if the scroll is going up or down, so we can determinate the next page to show
    //* if __actualScroll__ > 0, the scroll is going down
    //* if __actualScroll__ < 0, the scroll is going up
    if (scrollValue > 0) {
        if (!__actualPage__.next) return;
        __actualScroll__ += scrollValue;
        let __PAGE__ = __pages__.find(page => page.name === __actualPage__.next)
        if (__PAGE__ && __PAGE__.name != __actualPage__.name && __actualScroll__ >= __PAGE__.minScroll && !__changingPage__) {
            let pagePercent = (__actualScroll__ - __PAGE__.minScroll) / (__PAGE__.maxScroll - __PAGE__.minScroll) * 100;
            //* Setting the transition shadow
            __transitionShadow__.style.top = '0';
            __transitionShadow__.style.bottom = 'undefined';
            __transitionShadow__.style.height = pagePercent + '%';
            __transitionShadow__.style.opacity = pagePercent / 100;

            let hasPageChanged = false;
            if (pagePercent && pagePercent === 100) {
                hasPageChanged = true;
                console.log('Page changed to', __PAGE__.name);
                console.log(pagePercent, __actualScroll__);
                document.getElementById(__actualPage__.elementId).style.display = 'none';
                __actualPage__ = __PAGE__;
                document.getElementById(__actualPage__.elementId).style.display = 'flex';
            }
            if (hasPageChanged) {
                __changingPage__ = true;
                let heightPercent = 100;
                __transitionShadow__.style.top = '0';
                __transitionShadow__.style.bottom = 'undefined';
                await asyncTimeout(200);
                while (heightPercent > 0) {
                    heightPercent -= 5;
                    __transitionShadow__.style.height = heightPercent + '%';
                    __transitionShadow__.style.opacity = heightPercent / 100;
                    await asyncTimeout(10);
                }
                __changingPage__ = false;
            }
        }
    } else if (scrollValue < 0) {
        if (!__actualPage__.previous) return;
        __actualScroll__ += scrollValue;
        let __PAGE__ = __pages__.find(page => page.name === __actualPage__.previous)
        if (__PAGE__ && __PAGE__.name != __actualPage__.name && __actualScroll__ <= __PAGE__.maxScroll && !__changingPage__) {
            __actualScroll__ = Math.abs(__actualScroll__);
            let pagePercent = (__actualScroll__ - __PAGE__.minScroll) / (__PAGE__.maxScroll - __PAGE__.minScroll) * 100;
            //* Setting the transition shadow
            __transitionShadow__.style.top = '0';
            __transitionShadow__.style.bottom = 'undefined';
            __transitionShadow__.style.height = pagePercent + '%';
            __transitionShadow__.style.opacity = pagePercent / 100;

            let hasPageChanged = false;
            if (pagePercent && pagePercent === 100) {
                hasPageChanged = true;
                document.getElementById(__actualPage__.elementId).style.display = 'none';
                __actualScroll__ = __actualPage__.maxScroll;
                __actualPage__ = __PAGE__;
                document.getElementById(__actualPage__.elementId).style.display = 'flex';
            }
            if (hasPageChanged) {
                __changingPage__ = true;
                let heightPercent = 100;
                __transitionShadow__.style.top = '0';
                __transitionShadow__.style.bottom = 'undefined';
                await asyncTimeout(200);
                while (heightPercent > 0) {
                    heightPercent -= 5;
                    __transitionShadow__.style.height = heightPercent + '%';
                    __transitionShadow__.style.opacity = heightPercent / 100;
                    await asyncTimeout(10);
                }
                __changingPage__ = false;
            }
        }
    }
}

function asyncTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
