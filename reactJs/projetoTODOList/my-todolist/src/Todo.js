import React, { useState } from "react";
import './Todo.css';
import List from "./List";
import TodoForm from "./TodoForm";

function Todo() {
  
    const [items, setItems] = useState([]);

    function onAddItem(item){
        setItems([...items, item])
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>

            <List items={items}></List>
        </div>

    )
}

//Criar componente dentro de outro componente;
// function List(props) {
//     return (
//         <ul>
//             {props.items.map(item => <li>{item}</li>)}
//         </ul>
//     )
// }

// function TodoForm(props) {

//     const [text, setText] = useState("");

//     function handleChange(event) {
//         let t = event.target.value;
//         setText(t)

//     }

//     function addItem(event) {
//         //não atualiza a pagina ao apertar o botão
//         event.preventDefault();
//         if (text) {
//             //adiciona o primeiro elemento
//             //setItems([...items, text]);

//             props.onAddItem(text);
//             //limpar campo após adicionar elemento
//             setText("");
//         }
//     }

//     return (
//         <form>
//             <input onChange={handleChange} type="text" value={text}></input>
//             <button onClick={addItem}>Add</button>
//         </form>
//     )
// }


export default Todo;
