import React from "react";

export default function Exp(props) {
    // console.log(props.editData, 'Exp')
    if (!props.editSt) {
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
    } else {
        return (
            <div>
                <h2>CV Entries</h2>
                <form onSubmit={props.saveData}>
                <label htmlFor="institution">Institution / Company: </label>
                    <input 
                    name="institution"
                    type="text"
                    onChange={props.changeEdit}
                    placeholder={props.editData.institution}
                />
                <label htmlFor="degree">Degree / Role: </label>
                    <input 
                    name="degree"
                    type="text"
                    onChange={props.changeEdit}
                    placeholder={props.editData.degree}
                />
                <label htmlFor="start">From: </label>
                    <input 
                    name="start"
                    type="date"
                    onChange={props.changeEdit}
                    placeholder={props.editData.start}
                />
                <label htmlFor="until">Until: </label>
                    <input 
                    name="end"
                    type="date"
                    onChange={props.changeEdit}
                    placeholder={props.editData.end}
                />
                <label htmlFor="start">Description: </label>
                    <input 
                    name="description"
                    type="text"
                    onChange={props.changeEdit}
                    placeholder={props.editData.description}
                />
                <button>Save Changes</button>
                </form>
            </div>
        )
    }
    
}