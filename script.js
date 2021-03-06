
var numberValues = [];

function processText() {
    const consoleData = document.getElementById("console").checked;
    clearAll();
    const intext = document.getElementById("textInput").value;
    const text = preProcess(intext);
    const chars = parseChars(text);

    const words = parseWords(chars);
    const puncs = parsePunctuation(chars);
    const sentences = parseSentences(chars);

    const charMap = createMap(chars);
    const wordMap = createMap(words);
    const puncMap = createMap(puncs);
    const sentenceMap = createMap(sentences);

    const wordLengthMap = createMap(arrayCounter(words));
    const sentenceLengthMap = createMap(arrayCounter(sentences));

    numberValues.push(countTotal(text, 'all'));
    numberValues.push(countTotal(text, 'noSpaces'));
    numberValues.push(countTotal(text, 'spaces'));
    numberValues.push(charMap.size);
    numberValues.push(countTotal(intext, 'lineBreaks'));
    numberValues.push(countTotal(text, 'words'));
    numberValues.push(wordMap.size);
    numberValues.push(countTotal(text, 'punctuation'));
    numberValues.push(puncMap.size);
    numberValues.push(countTotal(text, 'sentences'));
    numberValues.push(sentenceMap.size);
    numberValues.push(parseFloat(wordMap.size/countTotal(text, 'words') * 100).toFixed(2) + "%");
    numberValues.push(parseFloat(charMap.size/countTotal(text, 'all') * 100).toFixed(2) + "%");

    createTable(ROW_CONCEPT, numberValues, 'totalTable', 'Total results');
    createTable(Array.from(charMap.keys()), Array.from(charMap.values()), 'charTable', 'Characters table');
    createTable(Array.from(puncMap.keys()), Array.from(puncMap.values()), 'puncTable', 'Punctuation table');
    createTable(Array.from(wordMap.keys()), Array.from(wordMap.values()), 'wordTable', 'Words table');
    createTable(Array.from(sentenceMap.keys()), Array.from(sentenceMap.values()), 'sentenceTable', 'Sentences table');

    if (consoleData) {
        console.log("Caracteres totales: " + countTotal(text, 'all'));
        console.log("Caracteres totales sin espacios: " + countTotal(text, 'noSpaces'));
        console.log("Espacios: " + countTotal(text, 'spaces'));
        console.log("Caracteres diferentes: " + charMap.size);
        console.log("Saltos de linea: " + countTotal(intext, 'lineBreaks'));
        console.log("Número de palabras: " + countTotal(text, 'words'));
        console.log("Palabras diferentes: " + wordMap.size);
        console.log("Signos de puntuación: " + countTotal(text, 'punctuation'));
        console.log("Signos de puntuación diferentes: " + puncMap.size);
        console.log("Palabras: " + words);
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
        console.log("Palabra más larga: " + longest(Array.from(wordMap.keys())));
    }
}