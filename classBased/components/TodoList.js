import React from "react"
import TodoItem from "./TodoItem"

class TodoList extends React.Component {
    render() {
        return (
            <ul> {this.props.adidos.map(todo => (
                <TodoItem
                    key={todo.id} adikatodo={todo} handleChangePro2={this.props.handleChangePro1} deleteTodoProp2={this.props.deleteTodoProp1}
                    setUpdate={this.props.setUpdate}
                />))}
            </ul>); // I just named the prop adikatodo. This name will be used to pass the state to the child component, TodoItem
    }
}
export default TodoList