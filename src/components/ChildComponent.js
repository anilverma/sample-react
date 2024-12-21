import React, {Component} from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Anil'
         }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.greatHandler(this.state.name)}>Greet Parent</button>
            </div>
        );
    }
}

export default ChildComponent;