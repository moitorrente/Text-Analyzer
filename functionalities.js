//Elimina saltos de linea y retornos de carro
function preProcess(inText) {
    let regexp = /[\n\r]/g;
    let text;
    if (regexp.test(inText)) {
        text = inText.replace(regexp, ' '); //Convierte los CR y saltos de linea en espacio
    } else {
        text = inText;
    }
    return text;
}

//A partir de un array de entrada devuelve un array con las longitudes de cada una de las ocurrencias
function arrayCounter(inArray) {
    let wordLenght = [];
    for (let pos in inArray) {
        wordLenght.push(inArray[pos].length);
    }
    return wordLenght;
}

function clearAll() {
    document.getElementById("textInput").value = null;
    console.clear();
}

function clearConsole(){
    console.clear;
}

function clearText(){
    document.getElementById("textInput").value = null;
}