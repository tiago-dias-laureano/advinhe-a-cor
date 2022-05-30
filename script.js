const ball = document.querySelectorAll('.ball');
const colorTips = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const colors = document.querySelector('.colors');
const resetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score');
window.onload = () => {
    generateGame()
}

function generateColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function randomNumber(){
    return Math.floor(Math.random() * 6);
}

function generateGame(){
    let correctColor = generateColor();
    colorTips.innerText = correctColor;

    answer.innerText = 'Escolha uma cor';

    random = randomNumber();

    for(let i = 0; i < ball.length; i++) {
        if(i === random){
            ball[i].style.backgroundColor = correctColor;
            continue
        }
        ball[i].style.backgroundColor = generateColor();
    }
    
    colors.addEventListener('click', (e) => {
        if(e.target.style.backgroundColor == correctColor) {
            answer.innerText = 'Acertou!'
            score.innerText = Number(score.innerText) + 3
        }else{
            answer.innerText = 'Errou! Tente novamente!'
        }
    })
}

resetGame.addEventListener('click', generateGame)