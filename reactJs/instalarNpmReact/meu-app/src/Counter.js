import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = { count: 0 }

        this.add = this.add.bind(this)
    }


    add() {
        //this.setState({ count: this.state.count + 1 })
        this.setState((state) => {
            return { count: state.count + 1 }
        }, () => {
            localStorage.setItem("state", JSON.stringify(this.state))
        })
    }

    // forçar se deve sofrer update no component ou nao
    // true - o componente será atualizado
    // false - o component não sofrerá atualizações
    shouldComponentUpdate() {
        return true;
    }

    // Só quando o componente for mostrado na tela, podemos usar localStorage aqui
    componentDidMount() {
        this.setState(JSON.parse(localStorage.getItem("state")));
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button className="button-85" onClick={this.add}>add</button>
            </div>)
    }

}



export default Counter;