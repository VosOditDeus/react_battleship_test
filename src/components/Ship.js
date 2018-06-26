import React from 'react';


export default class Ship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "type": undefined,
            "alive": true,
            "coordinates":[]
        }
        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        this.setState({cellState:"miss"});
    }



    render() {
        // const { onBattleshipClick } = this.props;

        return (
            <div className={this.props.type}>
                {this.props.type}
            </div>
        )
    }
}