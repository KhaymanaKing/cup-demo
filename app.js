// import functions and grab DOM elements
const leftHatEl = document.getElementById('hat-left');
const centerHatEl = document.getElementById('hat-center');
const rightHatEl = document.getElementById('hat-right');

const leftButtonEl = document.getElementById('button-left');
const centerButtonEl = document.getElementById('button-center');
const rightButtonEl = document.getElementById('button-right');

const correctTotals = document.getElementById('wins');
const attemptTotals = document.getElementById('total');
const incorrectTotals = document.getElementById('losses');



// let state
let wins = 0;
let attempts = 0;

// console.log(wins, attempts);

// set event listeners 

leftButtonEl.addEventListener('click', () =>{
    const correctGuess = getRandomHat();

    handleGuess('left', correctGuess);
});

centerButtonEl.addEventListener('click', () =>{
    const correctGuess = getRandomHat();
    handleGuess('center', correctGuess);
});
rightButtonEl.addEventListener('click', () =>{
    const correctGuess = getRandomHat();
    handleGuess('right', correctGuess);
});
// function resetStyles()

function getRandomHat(){
    const hiddenBall = [
        'left',
        'center',
        'right',
    ];
    const index = Math.floor(Math.random() * 3);
    // console.log('index', index);
    return hiddenBall[index];
}




function handleGuess(userGuess, correctGuess){ 
    leftHatEl.src = './assets/cup.png';
    centerHatEl.src = './assets/cup.png';
    rightHatEl.src = './assets/cup.png';  
    
    attempts++;
    
    const correctImage = document.getElementById(`hat-${correctGuess}`); 
    correctImage.src = './assets/ball.png';
    // console.log('correctImage', correctImage);
    if (userGuess === correctGuess){
        wins++;
    }

    if (correctGuess === 0){
        
        leftHatEl.src = './assets/ball.png';
    }
    else if (correctGuess === 1){
        
        centerHatEl.src = './assets/ball.png';
    } else (correctGuess === 2);{
        
        rightHatEl.src = './assets/ball.png';
    }
  
    correctTotals.textContent = wins;
    attemptTotals.textContent = attempts;
    incorrectTotals.textContent = attempts - wins;
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
