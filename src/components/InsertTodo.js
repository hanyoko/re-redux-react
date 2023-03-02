import React, { useState } from 'react';

const InsertTodo = ({onAddTodo}) => {
    const [ text, setText ] = useState("");
    const onChange = (e) => {
        const inputText = e.target.value;
        setText(inputText)
    }
    const onClick = () => {
        onAddTodo(text);
    }
    return (
        <div>
            <input name="text" onChange={onChange} value={text} />
            <button onClick={onClick}>등록</button>
        </div>
    );
};

export default InsertTodo;