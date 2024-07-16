function toggleCollapse() {
    const content = document.getElementById('content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    if (isNaN(minValue) || minValue === null || isNaN(maxValue) || maxValue === null) {
        minValue = -999;
        maxValue = 999;
};
    if ( minValue < -999  || maxValue > 999) {
        
    }

minValue = minValue < -999 ? -999 : (minValue > 999 ? 999 : minValue);
maxValue = maxValue > 999 ? 999 : (maxValue < -999 ? -999 : maxValue);

       
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));
    if (isNaN(minValue) || minValue == null || isNaN(maxValue) || maxValue == null) {
        alert('Пожалуйста, введите корректные числа.');
        return; 
    }

    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    gameRun = true;
   
});


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase;
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Это было сложно, но я думаю, что это число ${answerNumber}?`;
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.floor(Math.random() * 3);
            let answerPhrase;
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Да это легко! Вы загадали число ${answerNumber}?`;
                    break;
                case 1:
                    answerPhrase = `100 %, что это число ${answerNumber}?`;
                    break;
                case 2:
                    answerPhrase = `Ежу понятно, что это число ${answerNumber}?`;
                    break;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.floor(Math.random() * 3);
        let answerPhrase;
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
                    break;
                case 1:
                    answerPhrase = `Читаю ваши мысли\n\u{1F607}`;
                    break;
                case 2:
                    answerPhrase = `А вам слабо ?\n\u{1F605}`;
                    break;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        }
    });

document.getElementById('btnLess').addEventListener('click', function (){
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase;
             
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Это было сложно, но я думаю, что это число ${answerNumber}?`;
                    break;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.floor(Math.random() * 3);
            let answerPhrase;
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали число ${answerNumber}?`;
                    break;
                case 1:
                    answerPhrase = `Мне кажется, что это число ${answerNumber}?`;
                    break;
                case 2:
                    answerPhrase = `Без сомнения, это ${answerNumber}?`;
                    break;
            }
            answerField.innerText = answerPhrase;
        }
    }
});

        
