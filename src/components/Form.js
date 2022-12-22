import React from "react";
import Personal from "./Personal";

export default function Form(props) {

    return (
        <div>
            <Personal 
            change={props.change}
            submit={props.submit}
            />
        </div>
    )
}