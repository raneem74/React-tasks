import { Component } from "react";

class Test extends Component{
    constructor(){
        super();
        this.state={name:"my first class"}
    } 
    render(){
        return (<div>Welcome to {this.state.name}</div>);
    }
}

export default Test;