const rowConcept = ["Caracteres totales"
    , "Caracteres sin espacios"
    , "Espacios"
    , "Caracteres diferentes"
    , "Saltos de linea"
    , "Palabras totales"
    , "Palabras diferentes"
    , "Signos de puntuación totales"
    , "Signos de puntuación diferentes"];

function createTable(textArray, numberArray, id) {
    let body = document.getElementsByTagName("body")[0];

    let table = document.createElement("table");
    table.id = id;
    let tblBody = document.createElement("tbody");

    for (let i = 0; i < textArray.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 2; j++) {
            let cell = document.createElement("td");
            if (j % 2 === 0) {
                var cellText = document.createTextNode(textArray[i]);
            } else {
                var cellText = document.createTextNode(numberArray[i]);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    table.appendChild(tblBody);
    body.appendChild(table);
}