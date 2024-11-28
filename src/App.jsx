import { useState } from 'react';
import './App.css';
import Celebration from './celebration';
function Square({ value, onClick }) {
  return (
    <div className={`box ${value === "X" ? "text-blue-950" : "text-red-950"}`} onClick={onClick}>
      {value}
    </div>
  );
}
function App() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [x_turn, setX_turn] = useState(true);
  const [dialogbox, setDialogbox] = useState("Player X's move");
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);
  const Playagain = () => {
    setSquare(prev => prev.fill(null));
    setX_turn(true);
    setDialogbox("Player X's move");
    setWinner(null);
    setTie(false);
  };
  const turnHandler = (i) => {
    const newSquare = [...squares];
    if (newSquare[i] != null || winner)
      return;
    newSquare[i] = x_turn ? "X" : "O";
    const currentWinner = winnerCheck(newSquare);
    const tie = tiechecker(newSquare);
    setSquare(newSquare);
    if (currentWinner) {
      setWinner(currentWinner);
      setDialogbox("Player " + currentWinner + " is winner.");
    } else if (currentWinner === null && tie) {
      setTie(true)
      setWinner(null);
      setDialogbox("Match Draw");
    } else {
      const dialog = (x_turn ? "Player O's" : "Player X's").concat(" ", "move")
      setDialogbox(dialog);
      setX_turn(prev => !prev);
    }
  };
  const winnerCheck = (Squares) => {
    const streaks = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let streak of streaks) {
      const [a, b, c] = streak;
      if (Squares[a] && Squares[b] && Squares[c] && Squares[a] === Squares[b] && Squares[b] === Squares[c]) {
        return Squares[a];
      }
    }
    return null
  };
  const tiechecker = (Squares) => {
    return Squares.every(square => square !== null);
  };
  return (
    <>
        <div className='board-container'>
          <div className={`play-again-container ${winner || tie ? "visible" : "invisible"}`}>
            <div className={`play-again ${winner || tie ? "visible" : "invisible"}`} onClick={Playagain}>Play Again</div>
            <Celebration display={winner} />
          </div>
          <div className='board'>
            {squares.map((value, i) => (
              <Square key={i} value={value} onClick={winner ? () => { } : () => turnHandler(i)} />
            ))}
          </div>
          <div className='turn-dialog'>
            {dialogbox}
          </div>
        </div>
      <div className='w-full bg-purple-950 text-white text-center p-4 font-semibold'>
        Made by Mr Nobody
      </div>
    </>
  );
}

export default App;
