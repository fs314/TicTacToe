import React, {useState} from 'react';
import '../styles/GameCard.css'
import {Cell} from '../components/Cell'
import {calculateScore, resetScore} from '../utils/calculateScore'
import {checkWinner} from '../utils/checkWinner'

let isPlayersTurn = false;

const magicSquareNumbers = [8, 1, 6, 3, 5, 7, 4, 9, 2] 

//WOULD LOVE TO HAVE GAME SWITCHING TO APPROPIATE STATE TO CALCULATE WHAT TO DO 
/*const status = {
  IDLE: 'IDLE',
  START: 'PLAYING',
  END: 'OVER'
}*/

export const GameCard = () => {
        const [playercells, setPlayercells] = useState(resetScore())
        const [botcells, setBotcells] = useState(resetScore())
        const [gameover, setGameover] = useState(false);
    
        const selectCell = (cellStatus, setCellStatus, magicSquareNum) => {
            if(cellStatus === 'AVAILABLE') {
             
                if (isPlayersTurn) {
                    setCellStatus('PLAYERCELL')
                    setPlayercells( calculateScore(magicSquareNum, playercells))
                } else {
                    setCellStatus('BOTCELL')
                    setBotcells(calculateScore(magicSquareNum, botcells))
                }  
                
               if( checkWinner(playercells, botcells) ) {
                   setBotcells(resetScore()) //WOULD BE NICE TO IMPLEMENT A TALLY
                   setPlayercells(resetScore())
                   setTimeout(()=> setGameover(true), 1000 ) //HAVE GAME STATES?????
               } 

                isPlayersTurn = !isPlayersTurn;
            }

          if(gameover === true) {
              setGameover(false)
              //also need to add logic, if all cells are taken && none won then game is over
          } 
            
        }

    return (
    <div className={'GameCard'}>
       {magicSquareNumbers.map((msn, i) => 
            <Cell key={i} msn={msn}  selectCell={selectCell} gameover={gameover} setGameover={setGameover}/>    
       )}
    </div>
    )}