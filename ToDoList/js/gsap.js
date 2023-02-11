let home = document.getElementById("home");
let loginBtn = document.getElementById("login_btn");

document.addEventListener("DOMContentLoaded", () => {
  let timeline = new TimelineMax();

  timeline
  .from("#title", 1.5, { y: 200, ease: Power3.easeInout })
  .from("#header", 1, { y: 30, autoAlpha: 0, ease: Power3.easeInout }, '-=0.5')
  .from("#forms", 1, { y: 200, autoAlpha: 0, ease: Power3.easeInout }, '-=0.5')
  // .from("#login-form", 1, { width: '0%', autoAlpha: 0, ease: Power3.easeInout }, '-=1.5'); // 체이닝
});

loginBtn.addEventListener("click",() => {
  let timeline2 = new TimelineMax();

  timeline2.set('#gird', {display: 'block'})
  .to('#cloud img', 3, { y: -400, scale: 1.1, ease: Expo.easeInOut })
  .to('#bg-image', 3, { y: -600, ease: Expo.easeInOut }, '-=3')
  .to('#forms', 3, { autoAlpha: 0, y: -100, ease: Expo.easeInOut }, '-=3')
  .to('#dash-board', 3, { autoAlpha: 0, y: -100, ease: Expo.easeInOut }, '-=3')
  // .to('#dash-board', 3, { width: '0%', ease: Expo.easeInOut }, '-=3')


  home.addEventListener('click', () => {
    timeline2.reverse();
  });
});