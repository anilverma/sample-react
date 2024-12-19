import React, {Component}    from "react";
import App from "../App";

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome Visitor",
            count: 0
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing this message!'
        })
    }
    incrementCount() {
        /*this.setState({
            count: this.state.count + 1
        },
            ()=> {console.log(this.state.count)})*/

        this.setState((prevState) => ({
            count: prevState.count + 1
        }),()=> {console.log(this.state.count)})
    }
    incrementFive() {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()

    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>

        )
    }
}

export default Message