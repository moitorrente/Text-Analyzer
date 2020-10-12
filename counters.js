//Función de acceso a las funciones que realizan las cuentas, si el tipo no es niguno de los definidos busca el string entrado
function countTotal(text, type) {
    let count = 0;
    const textArray = Array.from(text);
    switch (type) {
        case 'words':
            count = parseWords(textArray).length;
            break;
        case 'punctuation':
            count = parsePunctuation(textArray).length;
            break;
        case 'sentences':
            count = parseSentences(textArray).length;
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
    const LINE_BREAK = /[\n\r]/g;
    if (LINE_BREAK.test(text)) {
        return text.match(LINE_BREAK).length;
    } else {
        return 0;
    }
}

//Devuelve el numero total de caracteres con y sin espacios
function countTotalChars(text, spaces) {
    if (spaces) {
        return text.length ;
    } else {
        return text.length - countChar(text, ' ');
    }
}

//Devuelve el numero de repeticiones de un caracter
function countChar(text, char) {
    return Array.from(text).filter(x => x == char).length;
}

//A partir de un array de entrada devuelve un array con las longitudes de cada una de las ocurrencias
function arrayCounter(inArray) {
    return inArray.map(x => x.length);
}