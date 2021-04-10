export const isWinner = (selectedCells) => {

    return selectedCells.row.includes(15) || selectedCells.column.includes(15) || selectedCells.across.includes(15) ? true : false

}

export const checkWinner = (playerCells, botCells) => {

    if(isWinner(playerCells)) {
        alert('PLAYER WINS')
        return true;
    } else if (isWinner(botCells)){
        alert('BOT WINS')
        return true;
    } else {
        return false;
    }
}