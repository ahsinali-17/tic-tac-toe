import react, { useState } from "react";
import Square from "./Square";
import { Link } from "react-router-dom";
export default function Computer() {
  const [xIsNext, setXIsNext] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [History, setHistory] = useState(Array(9).fill(null));
  const [disable, setdisable] = useState(false)
//player turn
  let handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if(disable)
    return
    setdisable(true)
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    
    setHistory(squares);
    setSquares(nextSquares);
    setXIsNext(true);
    
    setTimeout(() => {
      setSquares((prevSquares) => {
        let newSquares = prevSquares.slice();
        compTurn(newSquares);
        return newSquares;
      });
    }, 1000);
     
  };
  //computer turn
  let compTurn = (currentSquares) => {
    if (calculateWinner(currentSquares)) return;
  
    let box = Math.floor(Math.random() * 9);
    if (currentSquares[box]) {
      compTurn(currentSquares);
      return;
    }
    currentSquares[box] = "O";
    setXIsNext(false);
    setdisable(false)
  };
  //undo
  const prevState = () => {
    if (squares.every((i) => i === null)) return;
    if (History !== squares)
    setSquares(History);
  };
  //winner
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    if (squares.every((square) => square !== null)) {
      return "draw";
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else status = "Turn: " + (!xIsNext ? "X" : "O");

  //play again
  const start = () => {
    setHistory(squares);
    setSquares(Array(9).fill(null));
    setXIsNext(false)
    setdisable(false)
  };
  
  return (
    <div className="game back">

      <div className="playerInfo flex justify-evenly w-[100vw] my-3">
        <div className="p1 text-red-600 font-semibold bg-black p-2 rounded-lg">Player 1=X</div>
        <div className="p2 text-blue-600 font-semibold bg-black p-2 rounded-lg">Player 2=O</div>
      </div>
      <div
        className={`status ${(winner?(winner === "X"? "text-blue-600": (winner==="draw"?
        "text-green-600":"text-red-600"))
            : "text-green-600")
          } bg-black p-2 rounded-lg`}
      >
        {status}
      </div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          turn={xIsNext}
          winner={winner}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          turn={xIsNext}
          winner={winner}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          turn={xIsNext}
          winner={winner}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          turn={xIsNext}
          winner={winner}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          turn={xIsNext}
          winner={winner}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          turn={xIsNext}
          winner={winner}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          turn={xIsNext}
          winner={winner}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          turn={xIsNext}
          winner={winner}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          turn={xIsNext}
          winner={winner}
        />
      </div>
      <div className="buttons flex gap-5">
        <button
          className="start w-32 h-10 font-bold text-sm my-3"
          onClick={start}
        >
          Play Again
        </button>
        <button
          className="undo w-32 h-10 start font-bold text-sm my-3"
          onClick={prevState}
          disabled={disable}
        >
          Undo
        </button>
        <Link to="/"><button className='start w-32 h-10 font-bold text-sm my-3'>Home</button></Link>
      </div>
    </div>
  );
}
