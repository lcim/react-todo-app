import React, { Component } from 'react'

class InputTodo extends Component {

    state = {
        title: '',
        email: '',
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({ title: "", });
        } else {
            alert("Please enter a title")
        }
        
        
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" placeholder="Enter your input Todo as text" value={this.state.title} name="title" className="input-text"
                onChange={this.onChange} onSubmit={this.handleSubmit} />
                <button className="input-submit">Submit</button> 
            </form>
        )
    }
}
export default InputTodo

// A typical additional input looks like
/*
<input type="text" placeholder="Enter your input Todo as text" value={this.state.title} name="email"
onChange={this.onChange} onSubmit={this.handleSubmit} />
<button>Submit</button> */