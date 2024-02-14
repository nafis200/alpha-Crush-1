
// function play(){
//     //step1: hide the home screen. to hide the screen add the class 
//     const homeSection = document.getElementById('home-screen')

//     // console.log(homeSection.classList)
//     homeSection.classList.add('hidden')

//     const playground = document.getElementById('play-ground')
//     playground.classList.remove('hidden')
// }

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
