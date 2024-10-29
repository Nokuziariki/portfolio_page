import React from "react";
import "../styles/game.css";
import { GiCardAceHearts } from "react-icons/gi";
const Game: React.FC = () => {
    return (
        <div className="game" id="game">
            <div className="game-starting">
                <button className="start-button">
                    A little card game?
                    <GiCardAceHearts
                        className="start-button-icon"
                        style={{ color: "black" }}
                    />
                </button>
            </div>
            <div className="playing-zone"></div>
        </div>
    );
};

export default Game;
