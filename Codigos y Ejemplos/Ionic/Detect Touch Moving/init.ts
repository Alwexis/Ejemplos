initListeners() {
  const touchableElements = document.querySelectorAll('[detectTouch=true]');
  touchableElements.forEach((element) => {
    if (element.getAttribute('detectTouchX')) {
      element.setAttribute('lastXTouchLocation', '0');
      element.addEventListener('touchstart', (event: any) => {
        element.setAttribute('lastXTouchLocation', event.touches[0].clientX);
      });
      element.addEventListener('touchend', (event: any) => {
        const lastXTouchLocation = Number(element.getAttribute('lastXTouchLocation'));
        const currentXTouchLocation = event.changedTouches[0].clientX;
        const xTouchDifference = Math.round(lastXTouchLocation - currentXTouchLocation);
        if (xTouchDifference > 50) {
          //* Right
          // Do something
        } else if (xTouchDifference < -50) {
          //* Left
          // Do something
        }
      });
    }
  });
}
