//Caracteres considerados signos de puntuación
const PUNCTUACTION = ["\"", "\'", ".", ",", ";", ":", "(", ")", "[", "]", "{", "}", "¿", "?", "¡", "!", "-", "—", "_", "«", "»", "“", "”"] ;

//Devuelve un array con todos los caracteres separados por espacios
function parseChars(text) {
    return Array.from(text);
}

//Devuelve un array con todas las "palabras". 
//   Se considera palabra toda serie de caracteres que no son signos de puntuación separados por espacios
function parseWords(text) {
    const textArray = text.filter(x => !PUNCTUACTION.includes(x));
    return textArray.join("").split(" ").filter(x => x != "");
}

//Devuelve un array solo con los signos de puntación
function parsePunctuation(text) {
    return text.filter(x => PUNCTUACTION.includes(x));
}

//A partir de un string de entrada devuelve un array con las frases (se considera frase todo lo previo a un ".")
function parseSentences(text) {
    let regexp = /^\s*\s/;
    let sentences = text.join("").split(".");
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