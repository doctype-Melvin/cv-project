import React from "react";
import Personal from "./Personal";
import Exp from "./Exp";

export default function Form(props) {

    return (
        <div className="formContainer">
            <Personal 
            change={props.changePers}
            submit={props.submitPers}
            />
            <Exp 
            change={props.changeExp}
            submit={props.submitExp}
            editSt={props.editSt}
            editData={props.editData}
            saveData={props.saveData}
            changeEdit={props.changeEdit}
            />
        </div>
    )
}