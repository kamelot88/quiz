

const btnBlock1 = document.querySelector("button.block1");
const btnBlock2 = document.querySelector("button.block2");
const btnBlock3 = document.querySelector("button.block3");
const btnBlock4 = document.querySelector("button.block4");
const btnBlock5 = document.querySelector("button.block5");

const contentButton1 = document.querySelector("button.block1 > h3");
const contentButton2 = document.querySelector("button.block2 > h3");
const contentButton3 = document.querySelector("button.block3 > h3");
const contentButton4 = document.querySelector("button.block4 > h3");
const contentButton5 = document.querySelector("button.block5 > h3");

const block1Add = document.querySelector("body > div > div.wrap-kategori-answer > div");
const block2Add = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-rebus");
const block3Add =document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver");
const block4Add = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-question");
const block5Add = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-zagadka");
 
 
 
 btnBlock1.onclick = function() {
    block1Add.classList.toggle('display-none')
    if (contentButton1.textContent == 'Показать') {
        contentButton1.textContent = 'Скрыть';
    } else {
        contentButton1.textContent = 'Подробно';
    }
 };

 btnBlock2.onclick = function() {
    block2Add.classList.toggle('display-none')
    if (contentButton2.textContent == 'Показать') {
        contentButton2.textContent = 'Скрыть';
    } else {
        contentButton2.textContent = 'Подробно';
    }
 };

 btnBlock3.onclick = function() {
    block3Add.classList.toggle('display-none')
    if (contentButton3.textContent == 'Показать') {
        contentButton3.textContent = 'Скрыть';
    } else {
        contentButton3.textContent = 'Подробно';
    }
 };

 btnBlock4.onclick = function() {
    block4Add.classList.toggle('display-none')
    if (contentButton4.textContent == 'Показать') {
        contentButton4.textContent = 'Скрыть';
    } else {
        contentButton4.textContent = 'Подробно';
    }
 };

 btnBlock5.onclick = function() {
    block5Add.classList.toggle('display-none')
    if (contentButton5.textContent == 'Показать') {
        contentButton5.textContent = 'Скрыть';
    } else {
        contentButton5.textContent = 'Подробно';
    }
 };






var myAudio1Kaver = new Audio('./audio/1_Mona Songz - Салют, Вера.wav');
var myAudio2Kaver = new Audio('../audio/2_Vanilla_Sky_-_Zvenit_yanvarskaya_vyuga_(musmore.com).wav');
var myAudio3Kaver = new Audio('./audio/3_Скриптонит, Therr Maitz - Любите Девушки_[mp3mob.net].wav');
var myAudio4Kaver = new Audio('./audio/4_TSOY - Позови Меня С Собой.wav');
var myAudio5Kaver = new Audio('./audio/5_R3hab - Smells Like Teen Spirit (feat. Amba Shepherd).wav');
var myAudio6Kaver = new Audio('./audio/6_filatov-karas-feat-masha-lirika.wav');

var myAudio1_origin = new Audio('./audio/');
var myAudio2_origin = new Audio('./audio/');
var myAudio3_origin = new Audio('./audio/');
var myAudio4_origin = new Audio('./audio/');
var myAudio5_origin = new Audio('./audio/');
var myAudio6_origin = new Audio('./audio/');


var playKaver1 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver1 > div:nth-child(3) > img:nth-child(1)");
var playKaver2 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver2 > div:nth-child(3) > img:nth-child(1)");
var playKaver3 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver3 > div:nth-child(3) > img:nth-child(1)");
var playKaver4 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver4 > div:nth-child(3) > img:nth-child(1)");
var playKaver5 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver5 > div:nth-child(3) > img:nth-child(1)");
var playKaver6 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver6 > div:nth-child(3) > img:nth-child(1)");

    playKaver1.onclick = function() {
        myAudio1Kaver.play();
    };
    playKaver2.onclick = function() {
        myAudio2Kaver.play();
    };
    playKaver3.onclick = function() {
        myAudio3Kaver.play();
    };
    playKaver4.onclick = function() {
        myAudio4Kaver.play();
    };
    playKaver5.onclick = function() {
        myAudio5Kaver.play();
    };
    playKaver6.onclick = function() {
        myAudio6Kaver.play();
    };






var playOrigin1 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver1 > div:nth-child(5) > img:nth-child(1)");
var playOrigin2 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver2 > div:nth-child(5) > img:nth-child(1)");
var playOrigin3 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver3 > div:nth-child(5) > img:nth-child(1)");
var playOrigin4 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver4 > div:nth-child(5) > img:nth-child(1)");
var playOrigin5 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver5 > div:nth-child(5) > img:nth-child(1)");
var playOrigin6 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver6 > div:nth-child(5) > img:nth-child(1)");

playOrigin1.onclick = function() {
    myAudio1_origin.play();
};
playOrigin2.onclick = function() {
    myAudio2_origin.play();
};
playOrigin3.onclick = function() {
    myAudio3_origin.play();
};
playOrigin4.onclick = function() {
    myAudio4_origin.play();
};
playOrigin5.onclick = function() {
    myAudio5_origin.play();
};
playOrigin6.onclick = function() {
    myAudio6_origin.play();
};

var stopKaver1 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver1 > div:nth-child(3) > img:nth-child(2)");
var stopKaver2 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver2 > div:nth-child(3) > img:nth-child(2)");
var stopKaver3 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver3 > div:nth-child(3) > img:nth-child(2)");
var stopKaver4 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver4 > div:nth-child(3) > img:nth-child(2)");
var stopKaver5 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver5 > div:nth-child(3) > img:nth-child(2)");
var stopKaver6 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver6 > div:nth-child(3) > img:nth-child(2)");

stopKaver1.onclick = function() {
    myAudio1Kaver.pause();
};
stopKaver2.onclick = function() {
    myAudio2Kaver.pause();
};
stopKaver3.onclick = function() {
    myAudio3Kaver.pause();
};
stopKaver4.onclick = function() {
    myAudio4Kaver.pause();
};
stopKaver5.onclick = function() {
    myAudio5Kaver.pause();
};
stopKaver6.onclick = function() {
    myAudio6Kaver.pause();
};


var stopOrigin1 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver1 > div:nth-child(5) > img:nth-child(2)");
var stopOrigin2 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver2 > div:nth-child(5) > img:nth-child(2)");
var stopOrigin3 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver3 > div:nth-child(5) > img:nth-child(2)");
var stopOrigin4 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver4 > div:nth-child(5) > img:nth-child(2)");
var stopOrigin5 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver5 > div:nth-child(5) > img:nth-child(2)");
var stopOrigin6 = document.querySelector("body > div > div.wrap-kategori-answer > div.wrap-kaver > div.kaver.kaver6 > div:nth-child(5) > img:nth-child(2)");

stopOrigin1.onclick = function() {
    myAudio1_origin.pause();
};
stopOrigin2.onclick = function() {
    myAudio2_origin.pause();
};
stopOrigin3.onclick = function() {
    myAudio3_origin.pause();
};
stopOrigin4.onclick = function() {
    myAudio4_origin.pause();
};
stopOrigin5.onclick = function() {
    myAudio5_origin.pause();
};
stopOrigin6.onclick = function() {
    myAudio6_origin.pause();
};


var kaverCollection = [myAudio1Kaver, myAudio2Kaver, myAudio3Kaver, myAudio4Kaver, myAudio5Kaver, myAudio6Kaver];

var originCollection = [myAudio1_origin, myAudio2_origin, myAudio3_origin, myAudio4_origin, myAudio5_origin, myAudio6_origin];

var kaverPlayCollection = [playKaver1, playKaver2, playKaver3, playKaver4, playKaver5, playKaver6];

var oroginPlayCollection = [playOrigin1, playOrigin2, playOrigin3, playOrigin4, playOrigin5, playOrigin6];

var kaverStopCollection = [stopKaver1, stopKaver2, stopKaver3, stopKaver4, stopKaver5, stopKaver6];

var originStopCollection = [stopOrigin1, stopOrigin2, stopOrigin3, stopOrigin4, stopOrigin5, stopOrigin6];

