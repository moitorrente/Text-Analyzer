const puntuaction = ["\"", "\'", ".", ",", ";", ":", "(", ")", "[", "]", "{", "}", "¿", "?", "¡", "!", "-", "—", "_"];

var lineBreaks = 0;

function processText() {
    var intext = document.getElementById("textInput").value;
    let text = preProcess(intext);
    lineBreaks = countLineBreaks(intext);

    let chars = Array.from(text);
    let words = parseWords(text);
    let puncs = parsePunctuation(text);

    let charMap = mapChars(chars);
    let wordMap = mapChars(words);
    let puncMap = mapChars(puncs);

    let wordLengthMap = mapChars(wordLength(words));

    console.log("Caracteres totales: " + countTotalChars(text, true));
    console.log("Caracteres totales sin espacios: " + countTotalChars(text, false));
    console.log("Espacios: " + countChar(text, " "));
    console.log("Saltos de linea: " + countLineBreaks(intext));
    console.log("Palabras: " + parseWords(text));
    console.log("Número de palabras: " + countTotalWords(text));
    console.log("Signos de puntuación: " + countTotalPunctuation(text));
    console.log("Mapa aracteres: ")
    console.log(charMap);
    console.log("Mapa palabras: ")
    console.log(wordMap);
    console.log("Mapa signos puntuación: ");
    console.log(puncMap);
    console.log("Caracteres diferentes: " + charMap.size);
    console.log("Palabras diferentes: " + wordMap.size);
    console.log("Signos de puntuación diferentes: " + puncMap.size);

    console.log("Mapa de longitudes de palabra: ");
    console.log(wordLengthMap);
}

function clearText() {
    let text = document.getElementById("textInput").value = null;
    console.clear();
}

function preProcess(inText) {
    let regexp = /[\n\r]/g;
    let text;
    if (regexp.test(inText)) {
        text = inText.replace(/[\n\r]/g, ' '); //Convierte los CR y saltos de linea en espacio
    } else {
        text = inText;
    }
    return text;
}

function countLineBreaks(text) {
    let count = 0;
    let regexp = /[\n\r]/g;
    if (regexp.test(text)) {
        count = text.match(/[\n\r]/g).length;
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


//Devuelve un array con todas las "palabras" separadas por espacios
function parseWords(text) {
    let words = [];
    let textArray = Array.from(text); //Convierte string en array

    for (let i = textArray.length; i >= 0; i--) {
        for (let j = 0; j < puntuaction.length; j++) {
            if (textArray[i] == puntuaction[j]) {
                textArray.splice(i, 1);
            }
        }
    }

    words = textArray.join("").split(" "); //Convierte array en string y lo separa delimitado por espacios
    for (let i = words.length - 1; i > 0; i--) {
        if (words[i] == "") {
            words.splice(i, 1);
        }
    }
    return words;
}

//Devuelve el numero total de palabras
function countTotalWords(text) {
    let words = parseWords(text);
    return words.length;
}

//Devuelve un array solo con los signos de puntación
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

//Devuelve el número de signos de puntación totales
function countTotalPunctuation(text) {
    let totalPunc = parsePunctuation(text);
    return totalPunc.length;
}


//Devuelve un mapa con la información de "Valor" => "Número de repeticiones" de un array
function mapChars(inArray) {
    let charMap = new Map();
    let current = null;
    let counter = 0;
    let sortedArray = inArray.sort();

    for (let i in sortedArray) {
        if (sortedArray[i] != current) {
            if (counter > 0) {
                charMap.set(current, counter);
            }
            current = sortedArray[i];
            counter = 1;
        } else {
            counter++;
        }
    }
    if (counter > 0) {
        charMap.set(current, counter);
    }

    let sortedMap = sortMap(charMap);

    // console.log(sortedMap);
    return sortedMap;
}

//A partir de un mapa de entrada devuelve el mismo mapa ordenado por valor descendente
function sortMap(inMap) {
    let sortedMap = new Map();
    inMap[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
    }

    for (let [key, value] of inMap) {
        sortedMap.set(key, value);
    }
    return sortedMap;
}


//A partir de un array de entrada devuelve un array con las longitudes de cada una de las palabras
function wordLength(inArray){
    let wordLenght = [];
    for(let pos in inArray){
        wordLenght.push(inArray[pos].length);
    }
    return wordLenght;
}