function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
     const element = document.getElementById(elementId)
     element.classList.remove('hidden')
}


function getARandom(){
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split('');
    const random = Math.random() * 25;
    const index = Math.round(random)
    const alp = alphabets[index];
    return alp;
}

function SetBackgroundColorById(elementId){
     const element = document.getElementById(elementId)
     element.classList.add('bg-orange-400')
}
