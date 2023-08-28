import './App.css';
import React, { useEffect, useState } from 'react'
import Grid from './Grid';

export default function App() {

  const [score, setScore] = useState([0, 0]);

  const updateScore = () => {
    setScore([0,0]); 
    setMat(Array(9).fill(null));
  };

  useEffect(() => {
    updateScore();
    // eslint-disable-next-line
  }, []);

  const [mat, setMat] = useState(Array(9).fill(null));
  const [flag, setFlag] = useState(true);
  let val = 0;

  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const isWon = () => {
    let array = mat;
    for (let i = 0; i < 8; ++i) {
      if (array[win[i][0]] && array[win[i][0]] === array[win[i][1]] && array[win[i][0]] === array[win[i][2]]) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div className='container'>
        <div className="heading">
          <h1>Tic-Tac-Toe</h1>
        </div>
        <div className="score">
          <div className="dashBoard">
            <div className="x" style={{color:"red"}}>X - {score[0]}</div>
            <div className="x" style={{color:"blue"}}>O - {score[1]}</div>
          </div>
        </div>
        <div>
          <h4 id="msg"></h4>
        </div>
        <div className="main">
          <div className="content">
            {mat.map((element, index) => {
              return <Grid key={index} score={score} setScore={setScore} isWon={isWon} mat={mat} val={(val++)} value={element} setMat={setMat} flag={flag} setFlag={setFlag} />
            })}
          </div>
        </div>
        <div>
          <button className='btn' onClick={updateScore}>Rest</button>
        </div>
      </div>
      <footer>
        - by shiva
      </footer>
    </>
  )
}