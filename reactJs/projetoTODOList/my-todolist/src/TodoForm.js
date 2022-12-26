import React, { useState } from "react";

function TodoForm(props) {

    const [text, setText] = useState("");

    function handleChange(event) {
        let t = event.target.value;
        setText(t)

    }

    function addItem(event) {
        //não atualiza a pagina ao apertar o botão
        event.preventDefault();
        if (text) {
            //adiciona o primeiro elemento
            //setItems([...items, text]);

            props.onAddItem(text);
            //limpar campo após adicionar elemento
            setText("");
        }
    }

    return (
        <form>
            <input onChange={handleChange} type="text" value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm;