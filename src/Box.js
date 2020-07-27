import React, { Component } from 'react';

class Box extends Component {

    static defaultProps = {
        width: 100,
        height: 100,
        color: 'black',
    };

    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(evt) {
        this.props.removeBox(this.props.id);
    }

    render() {
        let style = {
            width: `${this.props.width}em`,
            height: `${this.props.height}em`,
            backgroundColor: this.props.color
        };
        return  (
            <div>
                <div style={style}></div>
                <button onClick={this.handleButton}>X</button>
            </div>
        )
    }
}

export default Box;