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
    console.log("Caracteres: " + mapChars(Array.from(text)));
    console.log("Mapa palabras: " + mapChars(parseWords(text)));
    console.log("Mapa signos puntuación: " + mapChars(parsePunctuation(text)));


}

//Devuelve el numero total de caracteres con y sin espacios
function countTotalChars(text, spaces) {
    let totalChars = text.length;
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

    for (let i = textArray.length; i > 0; i--) {
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
    console.log(charMap);
    return charMap;
}