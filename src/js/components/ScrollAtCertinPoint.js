import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import TweenLite from 'TweenLite';


class ScrollAtCertainPoint {
  constructor() {
    this.controller = new ScrollMagic.Controller();
    this.scrollBlackout();
    this.scrollOoReveal();
    this.scrollAppear();
    this.textReveal();
    this.contactReveal();

  }


  // createWaypoints() {

  //   window.addEventListener('scroll', () => {
  //     let scrollValue = window.pageYOffset
  //     console.log(scrollValue);
  //   })
  // }

  scrollAppear() {
    const tl = new TimelineMax({ onUpdate: updatePercentage })
    const mq = window.matchMedia('(min-width: 1200px)');

    if (mq.matches) {
      // at least 1200px
      tl.from('.project01__description__links', 1, { opacity: 0, y: 100 });
      tl.from('.project01__description__images', 1, { y: -100, opacity: 0, ease: Power4.easeInOut }, '=-1');

      tl.from('.project01__description--squarebox1', .3, { x: -800, opacity: 0 });
      tl.from('.project01__description--bar1', .3, { x: -900, opacity: 0 });
      tl.from('.project01__description--squarebox2', .1, { x: -800, opacity: 0 });
      tl.from('.project01__description--bar2', .3, { x: -900, opacity: 0 });
      tl.from('.project01__description--squarebox3', .1, { y: -1400, opacity: 0 });
      tl.from('.project01__description--bar3', .3, { y: -1400, opacity: 0 });
      tl.from('.project01__description--squarebox4', .1, { y: -1700, opacity: 0 });
      tl.from('.project01__description--bar4', .3, { y: -1600, opacity: 0 });
      tl.from('.project01__description--squarebox5', .1, { y: 500, opacity: 0 });
      tl.from('.project01__description--bar5', .3, { y: 500, opacity: 0 });

      tl.from('.project01__description--descriptive', .5, { opacity: 0 });

      const scene = new ScrollMagic.Scene({
        triggerElement: '.trigger--appear',
        triggerHook: 'onLeave',
        duration: '15%'
      })
        .setPin('.trigger--appear')
        .setTween(tl)
        .addIndicators({ name: 'appear' })
        .addTo(this.controller);

    } else {
      // less than 1200px
      tl.from('.project01__description__links', 1, { opacity: 0, y: 100 });
      tl.from('.project01__description__images', 2, { opacity: 0, ease: Power4.easeInOut }, '=-1');

      tl.from('.project01__description--squarebox1', .3, { x: -800, opacity: 0 });
      tl.from('.project01__description--bar1', .3, { x: -900, opacity: 0 });
      tl.from('.project01__description--squarebox2', .1, { x: -800, opacity: 0 });
      tl.from('.project01__description--bar2', .3, { x: -900, opacity: 0 });
      tl.from('.project01__description--squarebox3', .1, { y: -1400, opacity: 0 });
      tl.from('.project01__description--bar3', .3, { y: -1400, opacity: 0 });
      tl.from('.project01__description--squarebox4', .1, { y: -1700, opacity: 0 });
      tl.from('.project01__description--bar4', .3, { y: -1600, opacity: 0 });
      tl.from('.project01__description--squarebox5', .1, { y: 500, opacity: 0 });
      tl.from('.project01__description--bar5', .3, { y: 500, opacity: 0 });

      tl.from('.project01__description--descriptive', .5, { opacity: 0 });


      const scene = new ScrollMagic.Scene({
        triggerElement: '.trigger--appear',
        triggerHook: 'onLeave',
        duration: '100%'
      })
        .setPin('.trigger--appear')
        .setTween(tl)
        .addIndicators({ name: 'appear' })
        .addTo(this.controller);
    }

    const updatePercentage = () => {
      tl.progress();
      // console.log(tl.progress);
    }
  }

  scrollBlackout() {
    const tl = new TimelineMax({ onUpdate: updatePercentage })
    tl.to('.landing__background', .5, { opacity: 0 });

    const scene = new ScrollMagic.Scene({
      triggerElement: '.trigger--blackout',
      triggerHook: 'onLeave',
      duration: '40%'
    })
      .setPin('.trigger--blackout')
      .setTween(tl)
      // .addIndicators({ name: 'blackout' })
      .addTo(this.controller);

    const updatePercentage = () => {
      tl.progress();
    }
  }

  scrollOoReveal() {

    const tl = new TimelineMax({ onUpdate: updatePercentage })

    tl.from('.project01__line', .3, { x: -500, opacity: 0 });
    tl.from('.project01__text-dot', .1, { y: -300, opacity: 0 });
    tl.from('.project01__text-zero', .1, { y: -300, opacity: 0 });
    tl.from('.project01__text-one', .1, { y: -300, opacity: 0 });
    tl.from('.project01__text-project', 1, { scale: 2, opacity: 0 });

    const scene = new ScrollMagic.Scene({
      triggerElement: '.trigger--animation',
      triggerHook: 'onLeave',
      duration: '40%'
    })
      .setPin('.trigger--animation')
      .setTween(tl)
      // .addIndicators({ name: 'anime' })
      .addTo(this.controller);

    const updatePercentage = () => {
      tl.progress();
    }

  }

  textReveal() {
    const tl = new TimelineMax();
    const tl2 = new TimelineMax();
    tl.from('.project01__description__showcase', 2, { x: -500, opacity: 0 });
    tl.from('.project01__description__explanation', 2, { opacity: 0 });

    tl2.from('.project01__description__story', .2, { opacity: 0 });

    const scene1 = new ScrollMagic.Scene({
      triggerElement: '.trigger--text1',
      triggerHook: 'onLeave',
      duration: '100%'
    })
      .setTween(tl)
      .addIndicators({ name: 'text1' })
      .addTo(this.controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: '.trigger--text2',
      triggerHook: 'onLeave',
      duration: '60%'
    })
      .setTween(tl2)
      .addIndicators({ name: 'text2' })
      .addTo(this.controller);

  }

  contactReveal() {
    const tl = new TimelineMax();
    let screenL = window.matchMedia('(min-width: 1200px)');

    tl.from('.contact__first', 4, { opacity: 0 });
    tl.to('.logo--toTop', .5, { opacity: 0 });
    tl.from('.contact__second', 3, { x: -1500, opacity: 0 });
    tl.from('.logo--bigger', .5, { y: -500, opacity: 0 })

    if (screenL.matches) {
      // at least 1200px
      const scene = new ScrollMagic.Scene({
        triggerElement: '.trigger--contact',
        triggerHook: 'onLeave',
        duration: '35%'
      })
        .setTween(tl)
        .addIndicators({ name: 'contact' })
        .addTo(this.controller);
    } else {
      // less than 1200px
      const scene = new ScrollMagic.Scene({
        triggerElement: '.trigger--contact',
        triggerHook: 'onLeave',
        duration: '35%'
      })
        .setTween(tl)
        .addIndicators({ name: 'contact' })
        .addTo(this.controller);
    }
  }


}

export default ScrollAtCertainPoint;