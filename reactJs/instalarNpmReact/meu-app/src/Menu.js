import React from "react";

//Components são criados com a primeira letra MAIUSCULAS
function Menu(props) {
    return (
        <ul className="menu">
            {props.links.map(link => <li>{link}</li>)}
        </ul>
    )
}


export default Menu;