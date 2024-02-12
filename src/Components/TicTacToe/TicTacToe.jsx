import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import croos_icon from '../Assets/cross.png';

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [data, setData] = useState(Array(9).fill(null)); // Track the state of the board

    const toggle = (num) => {
        if (lock) {
            return;
        }
        if (data[num] === null) { // Check if the box is empty
            const newData = [...data]; // Create a copy of the current board
            if (count % 2 === 0) {
                newData[num] = 'x'; // Player 1's turn
            } else {
                newData[num] = 'o'; // Player 2's turn
            } // Toggle between 'x' and 'o' based on count
            setData(newData); // Update the state with the new board
            setCount(count + 1); // Increment the count
        }
    };

    return (
        <div className="container">
            <h1 className="title">Tic Tac Toe Game</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={() => toggle(0)}>
                        {data[0] === 'x' && <img src={croos_icon} alt="Cross" />}
                        {data[0] === 'o' && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(1)}>
                        {data[1] === 'x' && <img src={croos_icon} alt="Cross" />}
                        {data[1] === 'o' && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(2)}>
                        {data[2] === 'x' && <img src={croos_icon} alt="Cross" />}
                        {data[2] === 'o' && <img src={circle_icon} alt="Circle" />}
                    </div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={() => toggle(3)}>
                        {data[3] === 'x' && <img src={croos_icon} alt="Cross" />}
                        {data[3] === 'o' && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(4)}>
                        {data[4] === 'x' && <img src={croos_icon} alt="Cross" />}
                        {data[4] === 'o' && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(5)}>
                        {data[5] === 'x' && <img src={croos_icon} alt="Cross" />}
                        {data[5] === 'o' && <img src={circle_icon} alt="Circle" />}
                    </div>
                </div>
                <div className="row3 ">
                    <div className="boxes" onClick={() => toggle(6)}>
                        {data[6] === 'x' && <img src={croos_icon} alt="Cross" />}
                        {data[6] === 'o' && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(7)}>
                        {data[7] === 'x' && <img src={croos_icon} alt="Cross" />}
                        {data[7] === 'o' && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={() => toggle(8)}>
                        {data[8] === 'x' && <img src={croos_icon} alt="Cross" />}
                        {data[8] === 'o' && <img src={circle_icon} alt="Circle" />}
                    </div>
                </div>
            </div>
            <button className="reset" onClick={() => setData(Array(9).fill(null))}>
                Reset
            </button>
        </div>
    );
};

export default TicTacToe;
