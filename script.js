// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

//const throttle = require("lodash/throttle");
function isWindowSmall() {
  if(window.innerWidth < 1529) return true;
  const blockScrolling = [...document.querySelectorAll(".block-scrolling")].map(item => item.id);
  let blockNumber = 0;
  function scrollTo(event) { // слежу за прокруткой колеса
      if (event.deltaY > 10 || event.keyCode === 40) {         //если колесо крутится вниз или нажата кнопка вниз
          if (blockNumber !== blockScrolling.length - 1) blockNumber++;
      }
      else if (event.deltaY < -10 || event.keyCode === 38) { // если колесо крутится вверх или нажата кнопка вверх
          if (blockNumber !== 0) blockNumber--;
      }
      const blockCheckpoint = document.getElementById(blockScrolling[blockNumber]);
      blockCheckpoint.scrollIntoView({
          block: "start",
          behavior: "smooth"
      });
  }
  if (navigator.appVersion.indexOf("Mac")!==-1) {
      document.onwheel = throttle(scrollTo, 300);
  } else {
      document.onwheel = scrollTo;
  }
  document.addEventListener("keyup", function (event) { // обработчик события клавиш
      scrollTo(event);
  });
}


isWindowSmall();