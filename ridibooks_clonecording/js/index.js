// 카테고리 이동 리스트
const mainImg = document.querySelector(".listul");
const mainImgLi = document.querySelectorAll(".listul li")

const slideCount = mainImgLi.length;
const slideWidth = 186;
// const margin = 6;
const view = 6;

let currentIdx = 0;

const leftBtn = document.querySelector(".mcate_list1 .left_btn");
const rightBtn = document.querySelector(".mcate_list1 .right_btn");

mainImg.style.width = slideWidth * slideCount + "px";

function moveSlide (num) {
  mainImg.style.left = -num * 1110 + "px";
  currentIdx = num;
};

rightBtn.addEventListener("click", () => {
  if(currentIdx < slideCount - view) {
    moveSlide(currentIdx + 1)
  } else {
    moveSlide(0)
  }
});

leftBtn.addEventListener("click", () => {
  if(currentIdx > 0) {
    moveSlide(currentIdx - 1)
  } else {
    moveSlide(slideCount - view)
  }
});


// 맨 위로 올라가는 버튼
const scrollBtn  = document.querySelector(".up_btn");

scrollBtn.addEventListener("click", function() {
  // window.scrollTo(0,0).scrollIntoView({behavior: "smooth"});
  window.scrollTo(0,0);
  window.scrollIntoView({block:"start", behavior:'smooth'});
  // window.scrollIntoView({behavior:"smooth"});
});
