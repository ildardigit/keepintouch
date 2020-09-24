
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
function getRow(firstRow, secondRow) {
    let numberOfaFirstRow = 0;
    let NumberOfaSecondRow = 0;
    let result;
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) == 'а') {
            numberOfaFirstRow++;
        }

    }
    console.log(numberOfaFirstRow);
    for (let j = 0; j < secondRow.length;j++) {
        if (secondRow.charAt(j) == 'а') {
            NumberOfaSecondRow++;
        }

    }
    console.log(NumberOfaSecondRow);
    if (numberOfaFirstRow > NumberOfaSecondRow) {
        return firstRow;
    }
    return secondRow;
}

console.log(getRow(firstRow, secondRow));