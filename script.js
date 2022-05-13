const word = document.querySelector('.input-text');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');


button.addEventListener("click", countVovel);

function countVovel() {
    let vowelCount = 0;
    let wordValue = word.value.toLowerCase();

    for (let i=0; i<wordValue.length; i++) {
        let letter = wordValue[i];
        if(letter.match(/([a,e,i,o,u])/)) {
            vowelCount++;
        }
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}
