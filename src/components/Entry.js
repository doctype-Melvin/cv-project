import React from "react";

export default function Entry(props){
    const onBtnClick = (e) => {
        e.preventDefault(e)
        console.log(props.data[props.index])
    }

    return (
        <div className="entryContainer">
            <div className="company">
                {props.company}
            </div>
            <div className="role">
            {props.role}
            </div>
            <div className="date">
            From: {props.start} {props.end}
            </div>
            <div className="description">
            {props.description}
            </div>
            <button element={props.index} onClick={onBtnClick}>Edit {props.company}</button>
        </div>
    )
}