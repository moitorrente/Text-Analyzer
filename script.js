//pedte incropora ' y ""
const puntuaction = ["\"", "\'", ".", ",", ";", ":", "(", ")", "[", "]", "{", "}", "¿", "?", "¡", "!", "-", "—"];

function textProcessing() {
    var text = document.getElementById("textInput").value;

    console.log("Caracteres totales: " + countTotalChars(text, true));
    console.log("Caracteres totales sin espacios: " + countTotalChars(text, false));
    console.log("Espacios: " + countChar(text, " "));
    console.log("Palabras: " + parseWords(text));
    console.log("Número de palabras: " + countTotalWords(text));
    console.log("Signos de puntuación: " + countTotalPunctuation(text));

}

//Cuenta el numero total de caracteres con y sin espacios
function countTotalChars(text, spaces) {
    let totalChars = text.length;
    if (!spaces) {
        totalChars -= countChar(text, " ");
    }
    return totalChars;
}

//Cuenta el numero de repeticiones de un caracter
function countChar(text, char) {
    let totalChar = 0;
    for (let pos in text) {
        if (text[pos] == char) {
            totalChar++
        }
    }
    return totalChar;
}


//Devuelve un array con todas las "palabras" separadas por espacios
function parseWords(text) {
    let words = [];
    let textArray = Array.from(text);

    for (let i = textArray.length; i > 0; i--) {
        for (let j = 0; j < puntuaction.length; j++) {
            if (textArray[i] == puntuaction[j]) {
                textArray.splice(i, 1)
            }
        }
    }

    words = textArray.join("").split(" ");
    for (let i = words.length - 1; i > 0; i--) {
        if (words[i] == "") {
            words.splice(i, 1);
        }
    }
    return words;
}

//Cuenta el numero total de palabras
function countTotalWords(text) {
    let words = parseWords(text);
    return words.length;
}

//Devuelve un array con todos los signos de puntación
function parsePunctuation(text) {
    let puncMarks = [];
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < puntuaction.length; j++) {
            if (text[i] == puntuaction[j]) {
                puncMarks.push(text[i]);
            }
        }
    }
    return puncMarks;
}

//Cuenta el número de signos de puntación totales
function countTotalPunctuation(text) {
    let totalPunc = parsePunctuation(text);
    return totalPunc.length;
}