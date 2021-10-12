// function soundClick() {
//     var audio = new Audio(); // Создаём новый элемент Audio
//     audio.src = 'audio/Slaboe_zveno_-_Muzyka_vo_vremya_igry_(iPleer.com).mp3'; // Указываем путь к звуку "клика"
//     audio.autoplay = true; // Автоматически запускаем
// }
// soundClick();


// var audio = new Audio('../audio/Slaboe_zveno_-_Muzyka_vo_vremya_igry_(iPleer.com).mp3');
// audio.play();


var myAudio1 = new Audio('./audio/1_Mona Songz - Салют, Вера.wav');
var myAudio2 = new Audio('../audio/2_Vanilla_Sky_-_Zvenit_yanvarskaya_vyuga_(musmore.com).wav');
var myAudio3 = new Audio('./audio/3_Скриптонит, Therr Maitz - Любите Девушки_[mp3mob.net].wav');
var myAudio4 = new Audio('./audio/4_TSOY - Позови Меня С Собой.wav');
var myAudio5 = new Audio('./audio/5_R3hab - Smells Like Teen Spirit (feat. Amba Shepherd).wav');
var myAudio6 = new Audio('./audio/6_filatov-karas-feat-masha-lirika.wav');

var collectionAudio = [myAudio1, myAudio2, myAudio3, myAudio4, myAudio5, myAudio6];

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
      if (i < 5) {
        myLoop ();// пока индекс мень 10 выполняю функции
      } else {
        document.location.href = "index.html";
      }
   }, 45000); // устанавливаю интервал в милисекундах
}



    var sec = 44;
    var displayTime = document.querySelector("#timer");
    

    setInterval(function() {
        displayTime.textContent = sec;
    
      sec--;
      if(sec == 0)
      {
        sec = 45;
      }
     }, 1000);
  
     myLoop ();




// setTimeout(() => {
//     myAudio.volume = '0.1';
//     myAudio.play();
// }, 50);
