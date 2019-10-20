//Caracteres considerados signos de puntuación
const puntuaction = ["\"", "\'", ".", ",", ";", ":", "(", ")", "[", "]", "{", "}", "¿", "?", "¡", "!", "-", "—", "_"];

//Devuelve un array con todos los caracteres separados por espacios
function parseChars(text) {
    let chars = Array.from(text);
    return chars;
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

    if (words == "") {
        words.length = 0;
    }
    return words;
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

//A partir de un string de entrada devuelve un array con las frases (se considera frase todo lo previo a un ".")
function parseSentences(text) {
    let regexp = /^\s*\s/;
    let textArray = Array.from(text);
    let sentences = textArray.join("").split(".");
    for (let pos in sentences) {
        if (sentences[pos] == " " || sentences[pos] == "") { //Elimina las ocurrencias vacias
            sentences.splice(pos, 1);
        }
        if (regexp.test(sentences[pos])) {
            sentences[pos] = sentences[pos].replace(regexp, '');
        }
    }
    return sentences;
}