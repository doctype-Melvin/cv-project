import React from "react";
import { Form } from "./form/Form";

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <h2 className="title">My CV Generator</h2>
                <div className="wrapper">
                    <div className="left"><Form /></div>
                    <div className="right">Here we'll see the final product</div>
                </div>
            </div>
        )
    }
}