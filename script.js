function drawMatrixStructure(row, column) {
    for(let i = 0; i < row; i++) {
        let rowBlock = document.createElement("DIV");
        rowBlock.className = "row-block" + i;
        document.querySelector('.matrix-body').appendChild(rowBlock);

        for(let j = 0; j < column; j++) {
            let columnInput = document.createElement("INPUT");
            columnInput.className = "column-input" + j;
            document.querySelector('.row-block' + i).appendChild(columnInput);
        }
    }

    document.querySelector('.matrix-heading').style.display = "flex";
    document.querySelector('.find-number-box').style.display = "flex";
}

function onSubmitDimension() {
    document.querySelector('.matrix-body').innerHTML = "";
    let row = document.getElementById("dimension").elements[0].value;
    let column = document.getElementById("dimension").elements[1].value;

    drawMatrixStructure(row, column);

}

function onSubmitFind() {
    let message = findTheIndex();
    alert(message);
}

function getMatrixElements() {
    let matrixElements = [];
    let rows = document.getElementsByClassName('matrix-body')[0].getElementsByTagName('div');
    let rowLength = rows.length;
    
    for(let i = 0; i < rowLength; i++) {
        let columns = document.getElementsByClassName('row-block' + i)[0].getElementsByTagName('input');
        let inputLength = columns.length;
        matrixElements[i] = new Array(inputLength);

        for (let j = 0; j < inputLength; j++) {
            matrixElements[i][j] = columns[j].value;
        }
    }

    return matrixElements;
}

function findTheIndex() {
    let matrixElements = getMatrixElements();
    let columnCount = matrixElements[0].length;
    let rowCount = matrixElements.length;
    let number = document.querySelector('.find-number').value;

    i = 0; 
    j = columnCount - 1;
    for (;;) {
        
        if(matrixElements[i][j] == number) {
            i++;
            j++;
            return "The indexes are row= " + i + " column=" + j;
        } 

        if(+matrixElements[i][j] < +number && (i < rowCount - 1)) {
            i++;
            continue;
        }
        else {
            if(matrixElements[i][j] > number && j > 0) {
                j--;
                continue;
            } else {
                return "Element not found";
            }
        } 

    }
}
