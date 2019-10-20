//Elimina saltos de linea y retornos de carro
function preProcess(inText) {
    let regexp = /[\n\r]/g;
    let text;
    let caseSensitive = document.getElementById("caseSensitive").checked;
    if (regexp.test(inText)) {
        text = inText.replace(regexp, ' '); //Convierte los CR y saltos de linea en espacio
    } else {
        text = inText;
    }
    if(!caseSensitive){
        text = text.toLowerCase();
    }
    return text;
}

function clearAll(text) {
    if (text) {
        document.getElementById("textInput").value = null;
    }

    clearTable("totalTable");
    clearTable("charTable");
    clearTable("puncTable");
    clearTable("wordTable");
    clearTable("sentenceTable");
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
