import React from "react";
import Personal from "./Personal";
import Exp from "./Exp";

export default function Form(props) {

    return (
        <div>
            <Personal 
            change={props.changePers}
            submit={props.submitPers}
            />
            <Exp 
            change={props.changeExp}
            submit={props.submitExp}
            />
        </div>
    )
}