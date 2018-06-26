import React from 'react';


export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        let {status} = this.props;
        if(status === 'occupied'){
            this.setState({status: 'hit'});
        }else{
            this.setState({status: 'miss'});
        }
    }

    componentWillMount() {
        let {x, y} = this.props;
    }


    render() {
        let {x, y} = this.props;
        let {status} = this.state;
        return <td className={"cell"} key={this.props.x} y={y} x={x}
                   onClick={() => this.onClick()}>
            {status === 'miss' && <div>X</div>}
            {status === 'hit' && <div className={'hitted'}></div>}
            {/*{cellState === 'hitted' && <div  className='hitted' alt='hitted' width='auto' height='auto'/>}*/}
        </td>;
    }
}