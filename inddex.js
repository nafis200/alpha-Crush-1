
function handleKeyBoard(event){
    const playerpressed = event.key;
    // stop the game if pressed esc
    if(playerpressed == 'Escape'){
        gameOver()
    }
    const current = document.getElementById('current-alphabet');
    const currentalphabet = current.innerText;
    const expected = currentalphabet.toLowerCase();
    if(playerpressed === expected){
        console.log('you get a point')

        // const score = document.getElementById('score')
        // const currentScore = score.innerText
        // const currentNumber = parseInt(currentScore);
        // const newScore = currentNumber + 1;
        // score.innerText = newScore;
        const score = getTextElement('score')
        const newScore = score + 1;
        const updateScore = newScore;
        setElementValue('score',updateScore)

        RemoveBackground(expected)
        continueGame()
    }
    else{
        console.log('you miss')
        // const currentLife = document.getElementById('Life')
        // const life = currentLife.innerText
        // const LifeNumber = parseInt(life)
        // const NewLife = LifeNumber - 1
        // currentLife.innerText = NewLife

        const life = getTextElement('Life')
        const newLife = life - 1;
        setElementValue('Life',newLife)
        if(newLife === 0){
            gameOver()
        }
    }
}

document.addEventListener('keyup',handleKeyBoard);

function continueGame(){
    //step -1: generate random alphabet
    const alphabet = getARandom();

    //set alphabet
    const current = document.getElementById('current-alphabet')
    current.innerText = alphabet
    SetBackgroundColorById(alphabet)
}

function play(){
     hideElementById('home-screen')
     hideElementById('final-score')
     showElementById('play-ground')
    //  reset Score
    setElementValue('Life',5)
    setElementValue('score',0)

     continueGame()
}


function gameOver(){
      hideElementById('play-ground')
      showElementById('final-score')
      //update finalScore
      const lastScore= getTextElement('score')
      setElementValue('game-score',lastScore)
     //clear
    //  const alphabet = getElementById('play-ground')
    const currentalp = getElementTextById('current-alphabet')
    RemoveBackground(currentalp)
}