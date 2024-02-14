
function handleKeyBoard(event){
    const playerpressed = event.key;

    const current = document.getElementById('current-alphabet');
    const currentalphabet = current.innerText;
    const expected = currentalphabet.toLowerCase();
    if(playerpressed === expected){
        console.log('you get a point')
        RemoveBackground(expected)
        continueGame()
    }
    else{
        console.log('you miss')
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