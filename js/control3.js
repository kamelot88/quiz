// function soundClick() {
//     var audio = new Audio(); // Создаём новый элемент Audio
//     audio.src = 'audio/Slaboe_zveno_-_Muzyka_vo_vremya_igry_(iPleer.com).mp3'; // Указываем путь к звуку "клика"
//     audio.autoplay = true; // Автоматически запускаем
// }
// soundClick();


// var audio = new Audio('../audio/Slaboe_zveno_-_Muzyka_vo_vremya_igry_(iPleer.com).mp3');
// audio.play();


var myAudio1 = new Audio('./audio/filatov-karas-feat-masha-lirika (1).wav');
var myAudio2 = new Audio('../audio/skyforge-trek-dlya-viktoriny.mp3');
var myAudio3 = new Audio('./audio/');
var myAudio4 = new Audio('./audio/');
var myAudio5 = new Audio('./audio/');
var myAudio6 = new Audio('./audio/');
var myAudio7 = new Audio('./audio/');

var collectionAudio = [myAudio1, myAudio2, myAudio3, myAudio4, myAudio5, myAudio6, myAudio7];

// myAudio1.play();

// myAudio1.autoplay = true; 



//? скрипт переключения блоков вопросов

const colectionQuestions = document.querySelectorAll(".question"); // получаю коллекцию элементов


let i = 0;      // индекс елемента в массиве

function myLoop () {
    colectionQuestions[i].style.display = 'block';
    collectionAudio[i].play();
    setTimeout(function () {
    colectionQuestions[i].style.display = 'none';
      i++; // увеличиваю инднекс на 1
      if (i < 6) {
        myLoop ();// пока индекс мень 10 выполняю функции
      } else {
        document.location.href = "index.html";
      }
   }, 40000); // устанавливаю интервал в милисекундах
}



    var sec = 39;
    var displayTime = document.querySelector("#timer");
    

    setInterval(function() {
        displayTime.textContent = sec;
    
      sec--;
      if(sec == 0)
      {
        sec = 40;
      }
     }, 1000);
  
     myLoop ();




// setTimeout(() => {
//     myAudio.volume = '0.1';
//     myAudio.play();
// }, 50);
