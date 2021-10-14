
//? скрипт переключения блоков вопросов

const colectionQuestions = document.querySelectorAll(".rebus"); // получаю коллекцию элементов


let i = 0;      // индекс елемента в массиве

function myLoop () {
    colectionQuestions[i].style.display = 'flex';
    setTimeout(function () {
    colectionQuestions[i].style.display = 'none';
      i++; // увеличиваю инднекс на 1
      if (i < 10) {
        myLoop ();// пока индекс мень 11 выполняю функции
      } else {
        document.location.href = "answer.html";
      }
   }, 60000); // устанавливаю интервал в милисекундах
}



    var sec = 59;
    var displayTime = document.querySelector("#timer");
    

    setInterval(function() {
        displayTime.textContent = sec;
    
      sec--;
      if(sec == 0)
      {
        sec = 60;
      }
     }, 1000);
  
     myLoop ();

// window.onload = function () {
//     var startCount = 5;
//     var displayTime = document.querySelector("#timer");
//     startTimer(startCount, displayTime);
//     myLoop ();
// };








