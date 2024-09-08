import { Component } from 'react'


class Class_Component extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Tushar"
        }
    }

    componentDidMount() {
        console.log("Hello...");
    }

    componentDidUpdate() {
        console.log("State Change....");
    }

    changeState = () => {
        this.setState({
            name: "Wagh"
        })
    }

    render() {
        return (
            <>
             <h2>3]-:Class Component:-</h2>
                <p>Name:- {this.state.name}</p>
                <button onClick={() => this.changeState()}>Change State</button>
            </>
        )
    }
}

export default Class_Component;