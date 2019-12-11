import React, { Component } from 'react'
import ListRenderer from './ListRenderer';
import AddItem from './AddItem';

export default class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
    }

    addElement = (element) => {
        const { list } = this.state;
        let tempList = list;
        tempList.push({
            label: element,
            complete: false
        });
        this.setState({list: tempList})
    };

    getByTitle = () => (
        <div>
            <div>
                ToDo
            </div>
            <div>
                <button ><span /></button>
            </div>
        </div>
    );

    render() {
        const { list } = this.state;
        return (
        <div>
            {this.getByTitle()}
            <ListRenderer dataList={list} />
            <AddItem addElement={this.addElement} /> 
        </div>
        )
    }
}
