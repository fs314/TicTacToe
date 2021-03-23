import {initializeCells} from '../constants/constants'

export const resetScore = () => {
    return  {
        row: [0, 0, 0],
        column: [0, 0, 0],
        across: [0, 0]
      }
}

export const calculateScore = (msn, selectedCells) => { 
    const updateCells = {...selectedCells};

    const {row, column, across } = getCell(msn);
    const magicSquareNum = parseInt(msn);

    const rowScore =  selectedCells.row[row -1] + magicSquareNum
    const columnScore =  selectedCells.column[column -1] + magicSquareNum
    const acrossScore = across !== 0 ? selectedCells.across[across -1] + magicSquareNum : 0

    updateCells.row[row -1] = rowScore;
    updateCells.column[column -1] = columnScore;
    if(across !== 0) {
        updateCells.across[across -1] = acrossScore;
    } 
    
    return updateCells
}

const getCell = (msn) => {
    for (const [key, value] of Object.entries(initializeCells)) {
        if (key === msn) {
            return value
        }
    } 
}