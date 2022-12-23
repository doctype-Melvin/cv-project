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
        e.target.reset()
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
        e.target.reset()
    }

    // State of edit mode
    const [edit, setEdit] = useState(false) 

    // Sets the editable object
    const [editData, setEditData] = useState({})

   
    // Sets data to be edited
    const editEntry = (index) => {
        setEdit(prev => !prev) // Toggle mode
       const editThis = userData.entries[index]
       setEditData({editThis, index: [index]})
       console.log(editData)
    }

    const [newData, setNewData] = useState({})

    const handleEditChange = (e) => {
        const { name, value } = e.target
        setNewData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const replaceEntry = (obj, index) => {
        // obj = newData - index = editData.index[0]
        console.log(userData.entries)
        console.log(obj, index)
        console.log(userData.entry)
        setUserData(prevState => {
            return {
                ...prevState,
                entries: userData.entries.splice(index, 1, obj)
            }
        })
    }

    const saveEdit = (e) => {
        e.preventDefault()
        setEdit(prev => !prev)
        replaceEntry(newData, editData.index[0])
    }

    return (
        <div className="mainContainer">
            <Form
                changePers={handlePersonChange}
                submitPers={onSubmitPersonal}
                changeExp={handleEntryChange}
                submitExp={onSubmitEntry}
                editFn={editEntry} // fn to toggle edit state and choose object
                editSt={edit} // Edit state
                editData={editData.editThis} // Obj to edit
                changeEdit={handleEditChange} // onChange handler for edit mode
                saveData={saveEdit}
            />
            <View 
                data={userData}
                editToggle={editEntry} // fn to toggle edit state and choose object
                editSt={edit}
            />
        </div>
    )
}