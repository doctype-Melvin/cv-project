import React, { useState } from "react";
import Form from "./components/Form";
import View from "./components/View";

export default function App() {

   const [userData, setUserData] = useState({
    user: {},
    entry: {},
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

    const handleEntryChange = (e) => {
        const { name, value } = e.target
        setUserData(prevState => {
            return {
                ...prevState,
                entry: {
                    ...prevState.entry,
                    [name]: value
                }
            }
        })
    }

    const onSubmitEntry = (e) => {
        e.preventDefault()
        setUserData(prevState => {
            return {
                ...prevState,
                entries: userData.entries.concat(userData.entry)
            }
        })
        console.log(userData)
    }

    return (
        <div className="mainContainer">
            <Form
                changePers={handlePersonChange}
                submitPers={onSubmitPersonal}
                changeExp={handleEntryChange}
                submitExp={onSubmitEntry}
            />
            <View 
                data={userData}
            />
        </div>
    )
}