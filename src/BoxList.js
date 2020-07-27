import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addItem(box) {
        let uid = uuidv4();
        let newBox = <Box key={uid} width={box.width} height={box.height} color={box.color} id={uid} removeBox={this.removeBox}/>
        this.setState(oldState => ({
            items: [...oldState.items, newBox]
        }));
    }

    removeBox(boxid) {
        let newState = this.state.items.filter(item => item.props.id !== boxid);
        this.setState({
            items: newState
        });
    }

    render() {
        return (
            <div>
                <NewBoxForm addItem={this.addItem}/>
                {this.state.items}
            </div>
        )
    }
}

export default BoxList;