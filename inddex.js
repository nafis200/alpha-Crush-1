
function handleKeyBoard(event){
    const playerpressed = event.key;

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
     showElementById('play-ground')
     continueGame()
}