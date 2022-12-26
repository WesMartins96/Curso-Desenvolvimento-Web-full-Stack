import React, { useEffect, useState } from "react";


//Usando Hooks
function Counter(props) {

    //Hooks são como funções globais que a utilizamos para criar estados

    //sempre nomear com setNome
    const [count, setCount] = useState(props.count)

    //Diferença usando componentDidMount() e shouldComponentUpdate() com Hooks
    //Usando useEffect()


    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count")));

        return() => {
            console.log("Não tem mais contador");
        }
    }, [])

    useEffect(() => {
        document.title = count;
        localStorage.setItem("count", count)
    }, [count])


    function add() {
        setCount(count + 1)

    }


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className="button-85" onClick={add}>add</button>
        </div>)
}




// class Counter extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = { count: 0 }

//         this.add = this.add.bind(this)
//     }


//     add() {
//         //this.setState({ count: this.state.count + 1 })
//         this.setState((state) => {
//             return { count: state.count + 1 }
//         }, () => {
//             localStorage.setItem("state", JSON.stringify(this.state))
//         })
//     }

//     // forçar se deve sofrer update no component ou nao
//     // true - o componente será atualizado
//     // false - o component não sofrerá atualizações
//     shouldComponentUpdate() {
//         return true;
//     }

//     // Só quando o componente for mostrado na tela, podemos usar localStorage aqui
//     componentDidMount() {
//         this.setState(JSON.parse(localStorage.getItem("state")));
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button className="button-85" onClick={this.add}>add</button>
//             </div>)
//     }

// }



export default Counter;