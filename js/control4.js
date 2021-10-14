
//? скрипт переключения блоков вопросов

const colectionQuestions = document.querySelectorAll(".question"); // получаю коллекцию элементов


let i = 0;      // индекс елемента в массиве

function myLoop () {
    colectionQuestions[i].style.display = 'block';
    setTimeout(function () {
    colectionQuestions[i].style.display = 'none';
      i++; // увеличиваю инднекс на 1
      if (i < 5) {
        myLoop ();// пока индекс мень 10 выполняю функции
      } else {
        document.location.href = "answer.html";
      }
   }, 80000); // устанавливаю интервал в милисекундах
}



    var sec = 79;
    var displayTime = document.querySelector("#timer");
    

    setInterval(function() {
        displayTime.textContent = sec;
    
      sec--;
      if(sec == 0)
      {
        sec = 80;
      }
     }, 1000);
  
     myLoop ();

// window.onload = function () {
//     var startCount = 5;
//     var displayTime = document.querySelector("#timer");
//     startTimer(startCount, displayTime);
//     myLoop ();
// };








