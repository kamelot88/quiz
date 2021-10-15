
//? скрипт переключения блоков вопросов

// const colectionQuestions = document.querySelectorAll(".wrap-zagadka > .zagadka"); // получаю коллекцию элементов


// let i = 0;      // индекс елемента в массиве

// function myLoop () {
//     colectionQuestions[i].style.display = 'block';
//     setTimeout(function () {
//     colectionQuestions[i].style.display = 'none';
//       i++; // увеличиваю инднекс на 1
//       if (i < 4) {
//         myLoop ();// пока индекс мень 10 выполняю функции
//       } else {
//         document.location.href = "answer.html";
//       }
//    }, 30000); // устанавливаю интервал в милисекундах
// }



//     var sec = 29;
//     var displayTime = document.querySelector("#timer");
    

//     setInterval(function() {
//         displayTime.textContent = sec;
    
//       sec--;
//       if(sec == 0)
//       {
//         sec = 30;
//       }
//      }, 1000);
  
//      myLoop ();



const colectionSlid = document.querySelectorAll(".wrap-zagadka-slider > .slider-line > .zagadka"); // получаю коллекцию элементов слайдера
const slide = document.querySelector(".wrap-zagadka-slider > .slider-line > .zagadka");
const sliderLine = document.querySelector('.slider-line');

let count = 0;

let width;

function init() {
  // console.log('risize');
  width = document.querySelector('.wrap-zagadka-slider').offsetWidth;
  sliderLine.style.width = width * colectionSlid.length + 'px';
  colectionSlid.forEach( item => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}
window.addEventListener('resize', init);
init();

document.querySelector('.left').addEventListener('click', function() {
  count--;
  if (count < 0) {
    count = colectionSlid.length - 1;
  }
  rollSlider();
});


document.querySelector('.right').addEventListener('click', function() {
  count++;
  if (count >= colectionSlid.length) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-'+count*width+'px)';
}
