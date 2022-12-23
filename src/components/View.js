import React from "react";
import Entry from "./Entry";

export default function View(props) {
    
    const mapper = props.data.entries.map((item, index) => {
        return <Entry
            key={index}
            index={index}
            company={item.institution}
            role={item.degree}
            start={item.start}
            end={item.end}
            description={item.description}
            data={props.data.entries}
            edit={props.editToggle}
            editSt={props.editSt}
        />
    })
    return (
        <div className="viewContainer">
            <div className="personalInfo">
                <h1>{props.data.user.fullName}</h1>
                <h2>{props.data.user.role} </h2>
                <div>Email: {props.data.user.email}</div>
                <div>Phone: {props.data.user.phone}</div>
            </div>
            <div className="cvEntries">
            {mapper}
            </div>
        </div>
    )
}