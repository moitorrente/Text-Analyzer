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

function clearAll(text) {
    if (text) {
        document.getElementById("textInput").value = null;
    }

    clearTable("totalTable");
    clearData();
    console.clear();
}

function clearConsole() {
    console.clear;
}

function clearText() {
    document.getElementById("textInput").value = null;
}

function clearTable(id) {
    let table = document.getElementById(id);
    if (table) {
        table.parentNode.removeChild(table);
    }

}

function clearData() {
    numberValues.length = 0;
}
