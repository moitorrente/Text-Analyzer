//Devuelve un mapa con la información de "Valor" => "Número de repeticiones" de un array
function createMap(inArray) {
    const charMap = new Map();
    let current = null;
    let counter = 0;
    const sortedArray = inArray.sort();

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

    return sortMap(charMap);
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