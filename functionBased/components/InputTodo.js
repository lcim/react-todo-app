import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import {IconContext } from 'react-icons'

const InputTodo = (props) => {
    const [inputText, setInputText] = useState({
        title: '', 
        year: '',
    })
    const onChange = (e) => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setInputText({title: " ",})
        } else {
            alert("Please enter a title for todo item")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text"
                className="input-text"
                placeholder="Add todo..."
                value={inputText.title}
                name="title"
                onChange={onChange}
            />
            <button className="input-sumit"><FaPlusCircle
                style={{ color: 'darkcyan', fontSize: '25px', marginTop: '2px' }} /></button>
            <IconContext.Provider value={{
                color: 'darkcyan',
                style: { fontSize: '25px', color:"blueviolet", marginTop:'2px'},
                className: "submit-iconn"
            }}>
                <button className="input-submit">
                    <FaPlusCircle />
                </button>
                </IconContext.Provider>
        </form>
    )
}// The above shows different ways of styling SVGs. Style object overides the attributes set through values

export default InputTodo
