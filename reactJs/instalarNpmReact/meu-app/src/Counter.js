import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = { count: 1 }

        this.add = this.add.bind(this)
    }


    add() {
        this.setState({ count: this.state.count + 1 })

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