const puntuaction = ["\"", "\'", ".", ",", ";", ":", "(", ")", "[", "]", "{", "}", "¿", "?", "¡", "!", "-", "—", "_"];

var lineBreaks = 0;

function processText() {
    var intext = document.getElementById("textInput").value;
    let text = preProcess(intext);
    lineBreaks = countLineBreaks(intext);

    let chars = Array.from(text);
    let words = parseWords(text);
    let puncs = parsePunctuation(text);
    let sentences = parseSentences(text);

    let charMap = mapChars(chars);
    let wordMap = mapChars(words);
    let puncMap = mapChars(puncs);
    let sentenceMap = mapChars(sentences);

    let wordLengthMap = mapChars(arrayCounter(words));
    let sentenceLengthMap = mapChars(arrayCounter(sentences));

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

    console.log("Frases: ");
    console.log(sentences);

    console.log("Mapa de frases: " );
    console.log(sentenceMap);

    console.log("Mapa de longitud de frases: ");
    console.log(sentenceLengthMap);
}