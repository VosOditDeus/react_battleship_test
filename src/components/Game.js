import React from 'react';
import GameBoard from './GameBoard';
import {shipGenerator} from '../utils/utils';

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
        const SHIP_TYPES = [['small',1], ['dot',2], ['I',3], ['L',4]]
        let ships = SHIP_TYPES.map((type,i)=>{
            shipGenerator(i+2,2+i,type[1]);
        })
        console.log(SHIP_TYPES.map((type,i)=>{
            shipGenerator(i+2,2+i,type[1]);
        }))
        // let ships = shipGenerator(2,2,2);
        return (
            <div className="game">
                <GameBoard onClick = {this.onCellClick} ships={ships} />
            </div>
        )
    }
};