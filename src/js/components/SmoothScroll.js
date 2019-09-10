class SmoothScroll {
  constructor() {

  }
  scrollSmoother() {
    const scrollElement = (element, scrollPosition, duration) => {

      // useful while testing to re-run it a bunch.
      // element.removeAttribute("style"); 

      const style = element.style;
      style.transition = duration + 's';
      style.transitionTimingFunction = 'ease-in-out';
      style.transform = 'translate3d(0, ' + -scrollPosition + 'px, 0)';
    }

    scrollElement(
      document.body,
      (
        document.body.getBoundingClientRect().height
        -
        document.documentElement.clientHeight
        +
        10
      ),
      5
    );
  }
}
export default SmoothScroll;