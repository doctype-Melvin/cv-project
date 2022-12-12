import React from "react";

export class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            first: '',
            last: '',
            dob: '',}
    }
    render() {
        return (
            <form className="formCt">
                <FormSection sectionName='Personal Info'/>
            </form>
        )
    }
}

class FormSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        surname: '',
        birth: ''}
    }
    render() {
        return (
            <div className="section">{this.props.sectionName}
            <FormElement />
            </div>
        )
    }
}

class FormElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            firstName: '', 
            lastName: '',
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }

    handleSubmit(e) {
        console.log(this.state)
        e.preventDefault()
    }

    render(){
        return (
            <div className="formEl">
            <label>
               First Name:
                <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleInput}></input>
                <input type='submit' value='Submit' onClick={this.handleSubmit}></input>
            </label>
            <label>
                Last Name:
                <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleInput}></input>
                <input type='submit' value='Submit' onClick={this.handleSubmit}></input>
            </label>
            </div>
        )
    }
}