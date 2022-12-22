import React, { useState } from "react";
import Form from "./components/Form";

export default function App() {

   const [userData, setUserData] = useState({
    user: {},
    entries: []
   })

   const handlePersonChange = (e) => {
    const {name, value} = e.target
    setUserData(prevState => {
        return {
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value
            }
        }
    })
}

const onSubmitPersonal = (e) => {
    e.preventDefault()
    setUserData(prevState => {
        return {
            ...prevState,
            user: userData.user
        }
    })
    console.log(userData)
   }

    return (
        <div className="mainContainer">
            <Form
                change={handlePersonChange}
                submit={onSubmitPersonal}
            />
        </div>
    )
}