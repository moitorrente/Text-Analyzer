//Cuenta el número de saltos de linea
function countLineBreaks(text) {
    let count = 0;
    let regexp = /[\n\r]/g;
    if (regexp.test(text)) {
        count = text.match(regexp).length;
    } else {
        count = 0;
    }
    return count;
}

//Devuelve el numero total de caracteres con y sin espacios
function countTotalChars(text, spaces) {
    let totalChars = text.length + lineBreaks;
    if (!spaces) {
        totalChars -= countChar(text, " ");
    }
    return totalChars;
}

//Devuelve el numero de repeticiones de un caracter
function countChar(text, char) {
    let totalChar = 0;
    for (let pos in text) {
        if (text[pos] == char) {
            totalChar++;
        }
    }
    return totalChar;
}

//Devuelve el numero total de palabras
function countTotalWords(text) {
    let words = parseWords(text);
    return words.length;
}

//Devuelve el número de signos de puntación totales
function countTotalPunctuation(text) {
    let totalPunc = parsePunctuation(text);
    return totalPunc.length;
}