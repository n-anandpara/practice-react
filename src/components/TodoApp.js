import React from 'react'
import ListRenderer from './ListRenderer';
import AddItem from './AddItem';
import '../styles/TodoApp.css';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { list: [] };
        this.inputRef = React.createRef();
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

    onComplete = (e, value) => {
        const { list } = this.state;
        let tempList = list;
        tempList[value].complete = !tempList[value].complete;
        this.setState({ list: tempList });
    }

    inputFocus = () => {
        this.inputRef.current.focus();
    }

    getByTitle = () => (
        <div className="row header pb-1">
            <div className="col-6 title" >
                Todo
            </div>
            <div className='col-6 d-flex justify-content-end' >
                <button type="button" className="btn btn-secondary btn-sm my-2" onClick={() => this.inputFocus()}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    );

    onDelete = (e, index) => {
        const { list } = this.state;
        let tempList = list;
        tempList.splice(index, 1);
        this.setState({ list: tempList });
    }

    render() {
        const { list } = this.state;
        return (
        <div className="container body" >
            {this.getByTitle()}
            <div className="mx-3">
                <ListRenderer dataList={list} onComplete={this.onComplete} onDelete={this.onDelete} />
                <AddItem addElement={this.addElement} ref={this.inputRef} />
            </div> 
        </div>
        )
    }
}
