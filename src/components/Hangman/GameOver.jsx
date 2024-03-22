import React from "react";

function GameOver() {
    function reload(e) {
        e.preventDefault();
        window.location.reload(false);
    }
    return (
        <div className="game-status-container">
            <div className='game-over'>
                <h1>GAME OVER</h1>
                <h2 className="statement">You Made Too Many Incorrect Guesses!</h2>
                <button type="button" onClick={reload} className="play-again-button">Play Again</button>
            </div>
        </div>
    )
}

export default GameOver;