import baffle from 'baffle';

class Landing {
  constructor() {
    this.getParentHeight();
    this.textEffect();
  }

  getParentHeight() {
    const main = document.querySelector('.landing');
    const childAbsolute = document.querySelector('.landing__contents');
    let heightChild = childAbsolute.offsetHeight;

    window.addEventListener('load', () => {
      main.style.height = `${heightChild}px`;
    })
    window.addEventListener('resize', () => {
      main.style.height = `${heightChild}px`;
      console.log(heightChild)
      console.log('resized')
    })
  }

  textEffect() {
    let text = baffle('.landing__intro-text')
    text.set({
      characters: 'adsfiuert3467wyeritoyikhjhgviuytui132489',
      speed: 120
    });

    text.start();
    text.once();
    text.reveal(4000);


    return text;
  }

}

export default Landing