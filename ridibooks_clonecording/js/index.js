// 맨 위로 올라가는 버튼

const scrollBtn  = document.querySelector(".up_btn");

scrollBtn.addEventListener("click", function() {
  // window.scrollTo(0,0).scrollIntoView({behavior: "smooth"});
  window.scrollTo(0,0);
  window.scrollIntoView({block:"start", behavior:'smooth'});
  // window.scrollIntoView({behavior:"smooth"});
});