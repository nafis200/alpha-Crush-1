
// function play(){
//     //step1: hide the home screen. to hide the screen add the class 
//     const homeSection = document.getElementById('home-screen')

//     // console.log(homeSection.classList)
//     homeSection.classList.add('hidden')

//     const playground = document.getElementById('play-ground')
//     playground.classList.remove('hidden')
// }


function play(){
     hideElementById('home-screen')
     showElementById('play-ground')
}