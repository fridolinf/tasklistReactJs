import React, {useState } from 'react';
import Button from './Button';
import "../styles/FormInput.css"
import { add } from "../store/actions/listAction"
import { useDispatch } from "react-redux";

function FormInput() {
    const [text, setText] = useState("");
    const dispatch = useDispatch()
    const change = e => {
        setText(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        if (text !== "") {
            dispatch(add(text))
        }
        setText("")
    }

    return (
        <form style={inputForm} onSubmit={submit}>
        <input
            value={text}
            type="text"
            onChange={change}
            style={input}
            placeholder="add todo"
        />
        <Button text="add" variant="primary" action={submit}/>
    </form>
    )
}
export default FormInput;


const inputForm = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input = {
    width: "70%",
    border: 'none'
}