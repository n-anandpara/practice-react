import React from 'react'
import ListRenderer from './ListRenderer';
import '../styles/TodoApp.css';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { list: [], value: '' };
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
        if (this.inputRef.current.value) {
            this.addElement(this.inputRef.current.value)
            this.setState({value: ''});
            this.inputRef.current.focus();
        } else {
            this.inputRef.current.focus();
        }
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

    addElementOnEnter = (event) => {
        if (event.target.value && event.key === 'Enter') {
            event.preventDefault();
            this.setState({value: ''});
            this.addElement(event.target.value);
        } else if (!event.target.value && event.key === 'Enter') {
            event.preventDefault();
        }
    }

    render() {
        const { list, value } = this.state;
        return (
        <div className="container body" >
            {this.getByTitle()}
            <div className="mx-3">
                <ListRenderer dataList={list} onComplete={this.onComplete} onDelete={this.onDelete} />
                <form className='py-2'>
                    <input
                        value={value}
                        className="input-class form-control-plaintext"
                        ref={this.inputRef}
                        autoFocus
                        onChange={e => this.setState({ value: e.target.value})}
                        onKeyPress={this.addElementOnEnter}
                    />
                </form>
            </div> 
        </div>
        )
    }
}
