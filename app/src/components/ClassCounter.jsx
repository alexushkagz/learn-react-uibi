import React from 'react';

export class ClassCounter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: -1
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    test = 'test';
    increment() {
        this.setState({count: this.state.count + 1})
	}

	decrement() {
        this.setState({count: this.state.count - 1})
	}

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <h2>{this.test}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter