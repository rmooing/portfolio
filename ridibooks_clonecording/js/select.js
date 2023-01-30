// 메인 배너 버튼 
const slides = document.querySelector(".banner");
const slidesLi = document.querySelectorAll(".banner li")

const slideCount = slidesLi.length;
const slideWidth = 432;

let currentIdx = 0;

const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");

makeClone();

function makeClone() {
  for(let i = 0; i < slideCount; i++) {
    const clones = slidesLi[i].cloneNode(true);
    clones.classList.add("clone");
    slides.appendChild(clones);
  }
  
  for(let i = slideCount - 1; i >= 0; i--) {
    const clones = slidesLi[i].cloneNode(true);
    clones.classList.add("clone");
    slides.prepend(clones);
  }

  updateWidth();
  setInitialPos();

  setTimeout(function() {
    slides.classList.add('animated');
  },100);
}

function updateWidth() {
  const currentSlides = document.querySelectorAll(".banner li");
  const newSlideCount = currentSlides.length;
  const newWidth = slideWidth * newSlideCount + 'px';
  slides.style.width = newWidth;
}

function setInitialPos() {
  const initial1 = -slideWidth * slideCount;
  slides.style.transform = `translateX(${initial1}px)`;
}

function moveSlide (num) {
  let moveLeft = -num * slideWidth + "px";
  slides.style.left = moveLeft;
  currentIdx = num;

  if(currentIdx === slideCount) {
    setTimeout(() => {
      slides.classList.remove('animated')
      slides.style.left = '0px';
      currentIdx = 0;
    },500);

    setTimeout(() => {
      slides.classList.add('animated')
    },600);
  };

  if (currentIdx === -slideCount) {
    setTimeout(() => {
      slides.style.left = '0px'  
      currentIdx = 0; 
      slides.classList.remove('animated')
    }, 200);

    setTimeout(() => {
      slides.classList.add('animated')
    }, 300);
  };
};

var timer = undefined;

function autoSlide() {
  if(timer === undefined) {
      timer = setInterval(function(){
      moveSlide(currentIdx + 1);
    },4000);
  }
};

function stopSlide() {
  clearInterval(timer);
  timer = undefined;
};

rightBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
  stopSlide();
});

leftBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

autoSlide();


//메인 베스트 배너 버튼
const bestList = document.querySelector(".best_list");
const bestListLi = document.querySelectorAll(".best_list li")

const listCount = bestListLi.length;
const listWidth = 140;
const margin = 24;

let currentIdx1 = 0;

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

makeClone1();

function makeClone1() {
  for(let i = 0; i < listCount; i++) {
    const clones = bestListLi[i].cloneNode(true);
    clones.classList.add("clone");
    bestList.appendChild(clones);
  }

  for(let i = listCount - 1; i >= 0; i--) {
    const clones = bestListLi[i].cloneNode(true);
    clones.classList.add("clone");
    bestList.prepend(clones);
  }

  updateWidth1();
  setInitialPos2();

  setTimeout(function() {
    bestList.classList.add('animated');
  },100);
}

function updateWidth1() {
  const currentSlides = document.querySelectorAll(".best_list li");
  const newSlideCount = currentSlides.length;
  const newWidth = (listWidth + margin) * newSlideCount + 'px';
  bestList.style.width = newWidth;
};

function setInitialPos2() {
  const initial1 = -(listWidth + margin) * listCount;
  bestList.style.transform = `translateX(${initial1}px)`;
};

function listSlide (num) {
  bestList.style.left = -num * (listWidth + margin) + "px";
  currentIdx1 = num;

  if(currentIdx1 === listCount) {
    setTimeout(() => {
      bestList.classList.remove('animated')
      bestList.style.left = '0px';
      currentIdx1 = 0;
    },500);

    setTimeout(() => {
      bestList.classList.add('animated')
    },600);
  };

  if (currentIdx1 === -listCount) {
    setTimeout(() => {
      bestList.style.left = '0px'  
      currentIdx1 = 0; 
      bestList.classList.remove('animated')
    }, 200);

    setTimeout(() => {
      bestList.classList.add('animated')
    }, 300);
  };
};

nextBtn.addEventListener("click", function() {
  listSlide(currentIdx1 + 1);
});

prevBtn.addEventListener("click", function() {
  listSlide(currentIdx1 - 1);
});

//팝업 닫기 버튼
const closeBtn = document.querySelector(".close_btn");
const popUp = document.querySelector(".popup");

popUpClose = () => {
  popUp.classList.remove("popup");
}

closeBtn.addEventListener("click", popUpClose);


