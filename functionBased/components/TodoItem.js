import React, {useState, useEffect} from "react";
import styles from "./TodoItem.module.css"
import {FaTrash} from "react-icons/fa"

const TodoItem = (props) => {
    const [editing, setEditing] = useState(false)
    
    const handleEditing = () => {
        setEditing(true)
    }
    const handleUpdateDone = (event) => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    const { completed, id, title } = props.adikatodo
    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }
    useEffect(() => {
        return () => {
        console.log("cleaning....")
        }
    }, [] )

    return (
        <li className={styles.item} >
            <div>
            <input className={styles.checkbox} type="checkbox" checked={completed} 
                onChange={() => props.handleChangePro2(id)} /> 
            <button onClick={() => props.deleteTodoProp2(id)}><FaTrash style={{color:'orangered', fontSize:'16px'}}/></button> 
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
            </div>
            
            <div onDoubleClick={handleEditing} style={viewMode} >...</div> 
            <input
                type="text"
                style={editMode}
                className={styles.textInput} value={title}
                onChange={(e) => { 
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdateDone}
            />
        </li>
    )
}

/* A functional component can replace the above component
function TodoItem(props) {
    return <li>{props.adikatodo.title}</li>
} */
export default TodoItem;