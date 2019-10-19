
var numberValues = [];
function processText() {
    let consoleData = document.getElementById("console").checked;
    clearAll();
    var intext = document.getElementById("textInput").value;
    let text = preProcess(intext);
    lineBreaks = countLineBreaks(intext);

    let chars = parseChars(text);
    let words = parseWords(text);
    let puncs = parsePunctuation(text);
    let sentences = parseSentences(text);

    let charMap = createMap(chars);
    let wordMap = createMap(words);
    let puncMap = createMap(puncs);
    let sentenceMap = createMap(sentences);

    let wordLengthMap = createMap(arrayCounter(words));
    let sentenceLengthMap = createMap(arrayCounter(sentences));

    numberValues.push(countTotalChars(text, true));
    numberValues.push(countTotalChars(text, false));
    numberValues.push(countChar(text, " "));
    numberValues.push(charMap.size);
    numberValues.push(countLineBreaks(intext));
    numberValues.push(countTotalWords(text));
    numberValues.push(wordMap.size);
    numberValues.push(countTotalPunctuation(text));
    numberValues.push(puncMap.size);

    createTable(rowConcept, numberValues, 'totalTable');

    if (consoleData) {
        console.log("Caracteres totales: " + countTotalChars(text, true));
        console.log("Caracteres totales sin espacios: " + countTotalChars(text, false));
        console.log("Espacios: " + countChar(text, " "));
        console.log("Caracteres diferentes: " + charMap.size);
        console.log("Saltos de linea: " + countLineBreaks(intext));
        console.log("Número de palabras: " + countTotalWords(text));
        console.log("Palabras diferentes: " + wordMap.size);
        console.log("Signos de puntuación: " + countTotalPunctuation(text));
        console.log("Signos de puntuación diferentes: " + puncMap.size);
        console.log("Palabras: " + parseWords(text));
        console.log("Mapa aracteres: ")
        console.log(charMap);
        console.log("Mapa palabras: ")
        console.log(wordMap);
        console.log("Mapa signos puntuación: ");
        console.log(puncMap);
        console.log("Mapa de longitudes de palabra: ");
        console.log(wordLengthMap);
        console.log("Frases: ");
        console.log(sentences);
        console.log("Mapa de frases: ");
        console.log(sentenceMap);
        console.log("Mapa de longitud de frases: ");
        console.log(sentenceLengthMap);
        console.log(numberValues);
    }
}