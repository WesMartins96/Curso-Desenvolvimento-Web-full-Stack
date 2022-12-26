import React from "react"
import "./index.css"

function List(props) {

    

    return (
        <ul>
            {props.items.map(item => <li key={item.id}>{item.text}
                <button onClick={() => { props.onItemDeleted(item) }}><img className="lixo" src="https://img1.gratispng.com/20180831/es/kisspng-rubbish-bins-waste-paper-baskets-computer-icons-trash-svg-png-icon-free-download-223172-onlin-5b8a01455f3fe0.9212351315357709493902.jpg" alt="lixo"></img></button>
            </li>)}
        </ul>
    )
}


export default List;