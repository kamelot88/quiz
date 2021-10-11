// function soundClick() {
//     var audio = new Audio(); // Создаём новый элемент Audio
//     audio.src = 'audio/Slaboe_zveno_-_Muzyka_vo_vremya_igry_(iPleer.com).mp3'; // Указываем путь к звуку "клика"
//     audio.autoplay = true; // Автоматически запускаем
// }
// soundClick();


// var audio = new Audio('../audio/Slaboe_zveno_-_Muzyka_vo_vremya_igry_(iPleer.com).mp3');
// audio.play();


var myAudio = document.getElementById('mySound');

setTimeout(() => {
    myAudio.volume = '0.1';
    myAudio.play();
}, 50);
