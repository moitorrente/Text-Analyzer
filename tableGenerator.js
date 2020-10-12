const ROW_CONCEPT = ["Caracteres totales"
    , "Caracteres sin espacios"
    , "Espacios"
    , "Caracteres diferentes"
    , "Saltos de linea"
    , "Palabras totales"
    , "Palabras diferentes"
    , "Signos de puntuación totales"
    , "Signos de puntuación diferentes"
    , "Frases totales"
    , "Frases diferentes"
    , "Densidad léxica"
    , "Densidad de carácteres"];

function createTable(textArray, numberArray, id, captionText) {
    const body = document.getElementsByTagName("body")[0];
    const tables = document.getElementById("tables");

    const table = document.createElement("table");
    table.id = id;
    const tblBody = document.createElement("tbody");
    let rows = textArray.length;
    if (rows > 20){
        rows = 20;
    }

    // for (let i = 0; i < textArray.length; i++) {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 2; j++) {
            let cell = document.createElement("td");
            let cellText;
            if (j % 2 === 0) {
                cellText = document.createTextNode(textArray[i]);
            } else {
                cellText = document.createTextNode(numberArray[i]);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    if (captionText && rows > 0){
        const caption = table.createCaption();
        caption.textContent = captionText;
    }

    table.appendChild(tblBody);
    tables.appendChild(table)
    body.appendChild(tables);
}