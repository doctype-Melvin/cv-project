import React from "react";

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <div className="formCt">
                {/* Below is an example of how to output dynamic data */}
                { 'This message comes from Form.js render'}
                <form className="formEl" onSubmit={this.handleSubmit}>
                        <label>Name:
                        <input type="text" className="input" id="name" value={this.state.value} onChange={this.handleInput} />
                        </label>
                        <input type="submit" value = "Submit" />
                </form>
            </div>
        )
    }
}