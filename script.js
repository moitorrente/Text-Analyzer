function textProcessing() {
    var text = document.getElementById("textInput").value;
    var totalChar = countChars(text);

    console.log("Caracteres totales: " + countTotalChars(text, true));
    console.log("Caracteres totales sin espacios: " + countTotalChars(text, false));
    console.log("Espacios: " + countChars(text, " "));
}

//Cuenta el numero total de caracteres con y sin espacios
function countTotalChars(text, spaces) {
    let totalChar = text.length;
    if (!spaces){
        totalChar -= countChars(text," ");
    }
    return totalChar;
}

//Cuenta el numero de repeticiones de un mismo caracter
function countChars(text, char) {
    let totalChar = 0;
    for (let pos in text) {
        if (text[pos] == char) {
            totalChar++
        }
    }
    return totalChar;
}