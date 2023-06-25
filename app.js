const input = document.querySelector("#guessInput");
const button = document.querySelector(".button");
const resultBox = document.querySelector("#resultBox");
const guessNumber = document.querySelector("#guessNumber");
const attempts = document.querySelector("#attempts");
const response = document.querySelector("#response");


const randomNum = Math.floor((Math.random()*15)+1);
let attemptCount = 0;

button.addEventListener("click",()=>{
    attemptCount++;
   
    if(randomNum === Number(input.value)){
        response.textContent = `Congrats 👌 Your guess is right. Number is ${input.value}`;     
    }
    else if((Number(input.value) > 15) || (Number(input.value) < 1)){
        response.textContent = "Please enter number between 1 and 15";
    }
    else if(randomNum > input.value ){
        response.textContent = "Your guess is too low 🫤";
    }
    else if(randomNum < input.value){
        response.textContent = "Your guess is too high 😲";
    }

    const guessValue = input.value;
    resultBox.textContent = `Guess number is: ${guessValue} 
    Number of attempts: ${attemptCount}`;

});