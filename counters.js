var lineBreaks = 0;

//Función de acceso a las funciones que realizan las cuentas, si el tipo no es niguno de los definidos busca el string entrado
function countTotal(text, type) {
    let count = 0;
    switch (type) {
        case 'words':
            count = parseWords(text).length;
            break;
        case 'punctuation':
            count = parsePunctuation(text).length;
            break;
        case 'sentences':
            count = parseSentences(text).length;
            break;
        case 'lineBreaks':
            count = countLineBreaks(text);
            break;
        case 'spaces':
            count = countChar(text, ' ');
            break;
        case 'noSpaces':
            count = countTotalChars(text, false);
            break;
        case 'all':
            count = countTotalChars(text, true);
            break;
        default:
            count = countChar(text, type);
            break;
    }
    return count;
}


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

//A partir de un array de entrada devuelve un array con las longitudes de cada una de las ocurrencias
function arrayCounter(inArray) {
    let wordLenght = [];
    for (let pos in inArray) {
        wordLenght.push(inArray[pos].length);
    }
    return wordLenght;
}

