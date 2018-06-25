import React from 'react';
import GameBoard from './GameBoard';


export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.onCellClick = this.onCellClick.bind(this);
    }

    onCellClick(x, y) {
        console.log(x,y)

    }

    render() {
        // const {gameOver, whoseTurn, hasFired} = this.state;

        return (
            <div className="game">
                <GameBoard onClick = {this.onCellClick} />

            </div>
        )
    }
};