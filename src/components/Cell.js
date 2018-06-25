import React from 'react';


export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "cellState":'sea'
        }
        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        // let {onClick}  = this.props;
        // let el = event.target;
        // console.log(this.props)
        // if (cellState !== 'miss' && cellState !== 'hitted') {
        //     this.props.onCellClick(x, y);
        // onClick(x, y)
        this.setState({cellState:"miss"});
        // console.log(el);
        // }
    }



    render() {
        let { x, y } = this.props;
        let {cellState } =this.state;
        return <td className="cell" key={this.props.x} y={this.props.y} x={this.props.x}
                   onClick={() => this.onClick()}>
            {cellState  === 'miss' && <div >X</div>}
            {/*{cellState === 'hitted' && <div  className='hitted' alt='hitted' width='auto' height='auto'/>}*/}
        </td>;
    }
}