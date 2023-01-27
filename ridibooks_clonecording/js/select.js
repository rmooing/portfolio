//메인 배너 버튼 
// const mainImg = document.querySelector(".banner");
// const mainImgLi = document.querySelectorAll(".banner li")

// const slideCount = mainImgLi.length;
// const slideWidth = 432;
// const view = 3;

// let currentIdx = 0;

// const leftBtn = document.querySelector(".left_btn");
// const rightBtn = document.querySelector(".right_btn");

// mainImg.style.width = slideWidth * slideCount + "px";


// function moveSlide (num) {
//   mainImg.style.left = -num * slideWidth + "px";
//   currentIdx = num;
// }
// rightBtn.addEventListener("click", () => {
//   if(currentIdx < slideCount - view) {
//     moveSlide(currentIdx + 1)
//   } else {
//     moveSlide(0)
//   }
// });

// leftBtn.addEventListener("click", () => {
//   if(currentIdx > 0) {
//     moveSlide(currentIdx - 1)
//   } else {
//     moveSlide(slideCount - view)
//   }
// });

// function loopSlide() {
//   // moveSlide(currentIdx + 1)
// }

// setInterval(loopSlide,1000);


// 캐러셀 왼쪽, 오른쪽 버튼
const carouselRightBtn = document.querySelector(".right_btn");
const carouselLeftBtn = document.querySelector(".left_btn");

// 캐러셀 리스트, 캐러셀 이미지
let carousel_list = document.querySelector(".banner");
let carouselImgs = document.querySelectorAll(".banner li");

// 슬라이드 인덱스, 슬라이드 수, 캐러셀 너비, 캐러셀 높이
let slideIndex = 0;
const maxSlideIndex = carouselImgs.length;
const carouselWidth = carouselImgs[0].clientWidth;

// 왼쪽, 오른쪽 복사본 추가
const cloneLastNode = carousel_list.lastElementChild.cloneNode(true);
const cloneFirstNode = carousel_list.firstElementChild.cloneNode(true);
carousel_list.insertBefore(cloneLastNode, carousel_list.firstElementChild);
carousel_list.append(cloneFirstNode);

// 캐러셀 리스트 너비 설정(복사본 2개 추가)
carousel_list.style.width = carouselWidth * (maxSlideIndex + 2) + "px";
// 캐러셀 리스트 초기 위치 설정
carousel_list.style.transform = "translateX(-" + carouselWidth + "px)";

// 캐러셀 오른쪽 이동 버튼
carouselRightBtn.addEventListener("click", function(){
    // 복사본을 제외한 이미지 이동인 경우(기본 이동)
    if(slideIndex <= maxSlideIndex - 1) {
        carousel_list.style.transition = "transform 0.2s ease-in-out";
        carousel_list.style.transform = "translateX(-" + (carouselWidth * (slideIndex + 2)) + "px)";
        slideIndex++;
    }

    // 이동 후 오른쪽 복사본 이미지인 경우
    // transition = 0ms : 애니메이션 효과 제거
    // 첫번째 이미지로 이동
    if(slideIndex == maxSlideIndex){
        setTimeout(function() {
            carousel_list.style.transition = "0ms";
            carousel_list.style.transform = "translateX(-" + carouselWidth + "px)";
        }, 200);

        slideIndex = 0;
    }
});

// 캐러셀 왼쪽 이동 버튼
carouselLeftBtn.addEventListener("click", () => {
    // 복사본을 제외한 이미지 이동인 경우(기본 이동)
    if (slideIndex >= 0) {
        carousel_list.style.transition = "transform 0.2s ease-in-out";
        carousel_list.style.transform = "translateX(-" + (carouselWidth * slideIndex) + "px)";
        slideIndex--;
    }

    // 이동 후 왼쪽 복사본 이미지인 경우
    // transition = 0ms : 애니메이션 효과 제거
    // 마지막 이미지로 이동
    if (slideIndex < 0) {
        setTimeout(function() {
            carousel_list.style.transition = "0ms";
            carousel_list.style.transform = "translateX(-" + (carouselWidth * maxSlideIndex) + "px)";
        }, 200);

        slideIndex = maxSlideIndex - 1;
    }
});









//메인 베스트 배너 버튼
const bestList = document.querySelector(".best_list");
const bestListLi = document.querySelector(".best_list li")

const listCount = bestListLi.length;
const listWidth = 140;
const margin = 24;
const listview = 5;

let currentIdx1 = 0;

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

bestList.style.width = (listWidth + margin) * listCount + "px";

function listSlide (num) {
  bestList.style.left = -num * 800 + "px";
  currentIdx1 = num;
};

nextBtn.addEventListener("click", function() {
  if(currentIdx1 < listCount - listview) {
    listSlide(currentIdx1 + 1)
  } else {
    moveSlide(0)
  }
  console.log('hi');
});

prevBtn.addEventListener("click", function() {
  if(currentIdx1 > 0) {
    listSlide(currentIdx1 - 1)
  } else {
    listSlide(listCount - listview)
  }
});

//팝업 닫기 버튼
// const closeBtn = document.querySelector(".close_btn");
// const popUp = document.querySelector(".popup");

// popUpClose = () => {
//   popUp.classList.remove("popup");
// }

// closeBtn.addEventListener("click", popUpClose);


