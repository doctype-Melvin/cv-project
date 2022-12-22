import React from "react";

export default function Exp(props) {
    return (
        <div>
            <h2>CV Entries</h2>
            <form onSubmit={props.submit}>
            <label htmlFor="institution">Institution / Company: </label>
                <input 
                name="institution"
                type="text"
                onChange={props.change}
            />
            <label htmlFor="degree">Degree / Role: </label>
                <input 
                name="degree"
                type="text"
                onChange={props.change}
            />
            <label htmlFor="start">From: </label>
                <input 
                name="start"
                type="date"
                onChange={props.change}
            />
            <label htmlFor="until">Until: </label>
                <input 
                name="end"
                type="date"
                onChange={props.change}
            />
            <label htmlFor="start">Description: </label>
                <input 
                name="description"
                type="text"
                onChange={props.change}
            />
            <button>Add Entry</button>
            </form>
        </div>
    )
}