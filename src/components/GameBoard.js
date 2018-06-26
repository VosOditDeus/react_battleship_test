import React from 'react';
import Cell from './Cell';

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // this.onCellClick = this.onCellClick.bind(this);

    }

    onCellClick(x, y) {
        // console.log(this.props.onClick)
        // console.log('works');
        // console.log(x, y)
        this.props.onClick(x, y)
    }

    render() {
        // let rows = [];

        let rows = [];
        for (let y = 0; y < 10; y++) {
            // Build the cells in an array
            const cells = [];
            for (let x = 0; x < 10; x++) {
                let filled = false;
                this.props.ships.map((ship) => {
                    if (ship[0] === x && ship[1] === y) {
                        filled = 'occupied';
                    }
                })
                cells.push(<Cell key={x} y={y} x={x} onClick={() => this.onCellClick(x, y)} status={filled|| 'free'}/>);
            }
            // Put them in the row
            rows.push(<tr key={y} className="row">{cells}</tr>);
        }
        // Return the table
        return <table className="grid">
            <tbody>{rows}</tbody>
        </table>;
    }
}
