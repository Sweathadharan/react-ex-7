import { Component } from 'react';
import './editor.css'


class Editor extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" value={this.state.inputValue} onChange={this.handleChange} />
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.inputValue}</div>
                </div>                
            </div>
        );
    }
}

export default Editor;
