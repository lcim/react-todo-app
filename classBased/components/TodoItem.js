import React from "react";
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    state = {
        editing: false,
    }
    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }
    handleUpdateDone = (event) => {
        if (event.key === "Enter") {
            this.setState({
                editing: false
            })
        }
    }
    componentWillUnmount() {
        console.log("cleaning....")
    }
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        const { completed, id, title } = this.props.adikatodo

        let viewMode = {};
        let editMode = {};
        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        return (
            <li className={styles.item} >
                <div>
                <input className={styles.checkbox} type="checkbox" checked={completed} 
                    onChange={() => this.props.handleChangePro2(id)} /> 
                <button onClick={() => this.props.deleteTodoProp2(id)}>Delete</button> 
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
                </div>
                
                <div onDoubleClick={this.handleEditing} style={viewMode} >...</div> 
                <input
                    type="text"
                    style={editMode}
                    className={styles.textInput} value={title}
                    onChange={(e) => { 
                        this.props.setUpdate(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdateDone}
                />
            </li>
        )
    }
}

/* A functional component can replace the above component
function TodoItem(props) {
    return <li>{props.adikatodo.title}</li>
} */
export default TodoItem;