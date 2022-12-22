import React from "react";

export default function Personal(props) {

    return (
        <div>
            <h2>Personal Details</h2>
            <form onSubmit={props.submit}>
                <label htmlFor="fullname">Full Name: </label>
                <input 
                name="fullName"
                type="text"
                onChange={props.change}
                />
                <label htmlFor="role">Role: </label>
                <input 
                name="role"
                type="text"
                onChange={props.change}
                />
                <label htmlFor="email">Email: </label>
                <input 
                name="email"
                type="email"
                onChange={props.change}
                />
                <label htmlFor="phone">Phone: </label>
                <input 
                name="phone"
                type="tel"
                onChange={props.change}
                />
                <button>Add Info</button>
            </form>
        </div>
    )
}