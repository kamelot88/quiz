
//? скрипт переключения блоков вопросов

const colectionQuestions = document.querySelectorAll(".rebus"); // получаю коллекцию элементов


let i = 0;      // индекс елемента в массиве

function myLoop () {
    colectionQuestions[i].style.display = 'flex';
    setTimeout(function () {
    colectionQuestions[i].style.display = 'none';
      i++; // увеличиваю инднекс на 1
      if (i < 11) {
        myLoop ();// пока индекс мень 11 выполняю функции
      } else {
        document.location.href = "index.html";
      }
   }, 30000); // устанавливаю интервал в милисекундах
}



    var sec = 29;
    var displayTime = document.querySelector("#timer");
    

    setInterval(function() {
        displayTime.textContent = sec;
    
      sec--;
      if(sec == 0)
      {
        sec = 30;
      }
     }, 1000);
  
     myLoop ();

// window.onload = function () {
//     var startCount = 5;
//     var displayTime = document.querySelector("#timer");
//     startTimer(startCount, displayTime);
//     myLoop ();
// };







