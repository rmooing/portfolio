//메인 배너 버튼 
const mainImg = document.querySelector(".main_img");
const bannerImg = document.querySelector(".banner");
const bannerLi = document.querySelector(".main_img li")

const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");

const imgCount = bannerLi.length;
const containerWidth = 432;
const view = 3;

const currentIndex = 0;

// bannerImg.style.width = containerWidth * view + "px";

function slide (num) {
  bannerImg.style.left = containerWidth * -num + "px";
  currentIndex = num;
}

leftBtn.addEventListener("click", function(){
  if(currentIndex < imgCount - view) {
    slide(currentIndex + 1)
  } else {
    slide(0)
  }
});

//메인 베스트 배너 버튼



//팝업 닫기 버튼
const closeBtn = document.querySelector(".close_btn");
const popUp = document.querySelector(".popup");

function popUpClose() {
  popUp.classList.remove("popup");

}

closeBtn.addEventListener("click", popUpClose);


