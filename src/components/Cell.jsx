import React, { useEffect, useState} from 'react';
import '../styles/Cell.css'



export const Cell = ({msn, selectCell, gameover}) => {
    const [cellStatus, setCellStatus] = useState('AVAILABLE'); //perhaps can have some config which can be set that allows players to select color for cells and use that to color cells
    const [bgcolor, setBgcolor] = useState('chocolate')

    useEffect(()=>{  
        switch(cellStatus) {
            case 'PLAYERCELL':
                setBgcolor('blue');
                break;
            case 'BOTCELL':
                setBgcolor('green');
                break;
            default:
                setBgcolor('chocolate');
        }

        if(gameover) {
            setBgcolor('chocolate')
            setCellStatus('AVAILABLE')
        }

    }, [cellStatus, gameover])

    return (
        <div className="tictactoe-cell" value={msn} style={ {backgroundColor: bgcolor} } onClick={(e)=> {selectCell(cellStatus, setCellStatus, e.target.getAttribute('value'))}}/>
    )
}

    