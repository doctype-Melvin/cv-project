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
           <div className="section">
            <InputField 
            section='First Name: ' 
            name='firstName'
            type='text' 
            value={this.state.firstName} 
            onInput={this.handleInput} 
            submitClick={this.handleSubmit}/>
            <InputField 
            section='Last Name: ' 
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
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <div className="formEl">
            <label>
               {this.props.section}
                <input name={this.props.name} onChange={this.props.onInput}></input>
                <input type='submit' value='Submit' onClick={this.props.submitClick}></input>
            </label>
            </div>
        )
    }
}