import React, { useEffect, useState} from 'react';
import '../styles/Cell.css'



export const Cell = ({msn, selectCell, gameover}) => {
    const [cellStatus, setCellStatus] = useState('AVAILABLE'); 
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

    