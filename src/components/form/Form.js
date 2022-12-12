import React from "react";

export class Form extends React.Component {
    // The top level parent
    // It renders the individual form sections
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
    // This component renders multiple form elements
    constructor(props) {
        super(props)
        this.state = {value: ''}
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
    // Component handles input changes and submit clicks
    // Renders individual input fields
    // Passes handler functions down to child component

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
           <div className="section">
            <InputField // Form input 'First Name'
            labelName='First Name: ' 
            name='firstName'
            type='text' 
            value={this.state.firstName} 
            onInput={this.handleInput} 
            submitClick={this.handleSubmit}/>
            <InputField // Form input 'Last Name'
            labelName='Last Name: ' 
            name='lastName'
            type='text' 
            value={this.state.lastName} 
            onInput={this.handleInput} 
            submitClick={this.handleSubmit}/>
           </div>
        )
    }
}

class InputField extends React.Component {
    // Component renders a label, an input field and a button

    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <div className="formEl">
            <label>
                {/* Creates the label for inputs  */}
               {this.props.labelName} 
               {/* Wires input fields to the parent's state  */}
                <input name={this.props.name} onChange={this.props.onInput}></input>
                {/* Submits values to update parent's state */}
                <input type='submit' value='Submit' onClick={this.props.submitClick}></input>
            </label>
            </div>
        )
    }
}