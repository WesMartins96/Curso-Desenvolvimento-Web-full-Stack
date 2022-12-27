import React from "react";

import "../index.css"
import "../Todo.css"
import Card from "./Card"



function DoneImg(props) {
    if (props.done) {
        return (
            <img className="lixo" alt="done" src="https://e7.pngegg.com/pngimages/818/356/png-clipart-check-mark-computer-icons-checkbox-others-angle-logo.png"></img>
        )
    } else {
        return (
            <img className="lixo" alt="undone" src="https://cdn1.iconfinder.com/data/icons/essential-21/129/uncheck-512.png"></img>
        )
    }
}


function ListItem(props) {
    return (
        <li >
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={() => { props.onItemDeleted(props.item) }}><img className="lixo" src="https://img1.gratispng.com/20180831/es/kisspng-rubbish-bins-waste-paper-baskets-computer-icons-trash-svg-png-icon-free-download-223172-onlin-5b8a01455f3fe0.9212351315357709493902.jpg" alt="lixo"></img></button>
                </div>
            </Card>
        </li>)
}


export default ListItem;