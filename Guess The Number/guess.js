let randomNumber=parseInt(Math.random()*100+1);  //Rnadom value o to 100 chya madhe yenar
console.log(randomNumber)
let userInput =document.querySelector('#guessField');
let submitValue =document.querySelector('#sub');
let guessSlot =document.querySelector('.guesses');
let remamingGuess =document.querySelector('.lastResult');
let lowOrHi =document.querySelector('.lowOrHi');
let startOver =document.querySelector('.resultParas');

let p=document.createElement('p');

let  prevGuess=[];

let numGuess=0;

let playGames=true;

if(playGames){

submitValue.addEventListener('click',function(e){
 
    e.preventDefault()

    let guess=parseInt(userInput.value);
console.log(guess)
    validationGuess(guess);
})

}

//Validation Method

function validationGuess(guess){

  if(isNaN(guess)){
    alert("please enter a valid number")
  }
  else if(guess>100){
    alert("please enter a number lesser than 100")
  }
  else if(guess<1){
    alert("please enter a number gretater than 1")
  }
  else{
    prevGuess.push(guess)
    if(numGuess===9){
        cleaneUpGuess(guess)
        displayMessage(`Game over Random Number Was ${randomNumber}`)
        endGame();
    }
    else{
        cleaneUpGuess(guess)
        checkGuess(guess)
    }
      
  }

}

//Check  Guess

function checkGuess(guess){


    
    if (guess===randomNumber){
        displayMessage("You gueesed it right")        
    }
    else if(guess<randomNumber){
        displayMessage("Your number is too Low ")
    }
    else if(guess>randomNumber){
        displayMessage("Your number is too high ")
    }
}

//dispaly Guess

function cleaneUpGuess(guess){

    userInput.value='';
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remamingGuess.innerHTML= `${10-numGuess}`

}
//dispaly Guess message
function displayMessage(messgae){

lowOrHi.innerHTML=`<h2>${messgae}</h2>`

}



function endGame(messgae){

userInput.value='';
userInput.setAttribute('disabled',' ')
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start New Game </h2>`;
startOver.appendChild(p);
playGames=false;
newGame();

}

function newGame(messgae){


    let newGameButton =document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
         
        let randomNumber=parseInt(Math.random()*100+1);
        prevGuess= []
        numGuess=1
        guessSlot.innerHTML=''
       remamingGuess.innerHTML= `${11-numGuess}`
       userInput.removeAttribute('disabled')
       startOver.removeChild(p)
         playGames=true;

    })
}