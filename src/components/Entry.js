import React from "react";

export default function Entry(props){

    const onBtnClick = (e) => {
        e.preventDefault(e)
        props.edit(props.index)
    }
    // If the edit state is true
    // Place target obj data into form
    return (
        <div className="entryContainer">
            <div className="company">
                {props.company}
            </div>
            <div className="role">
            {props.role}
            </div>
            <div className="date">
            From: {props.start} Until: {props.end}
            </div>
            <div className="description">
            {props.description}
            </div>
            <button element={props.index} onClick={onBtnClick}>Edit {props.company}</button>
        </div>
    )
}

