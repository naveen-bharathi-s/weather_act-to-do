import React, { useState } from 'react'

const AddToDo = ({ item, setitem }) => {
    const [newactivity, setnewactivity] = useState("")
    function handleChange(evt){
        setnewactivity(evt.target.value)
    }
    function addActivity() {
        setitem([...item, { activity: newactivity}])
        setnewactivity("")
    }
    return (
        <div>
            <h1 className='text-2xl font-medium mb-2 flex-grow w-full text-purple-600'>Manage Activities</h1>
            <input value={newactivity} type="text" placeholder='Next Activity?'
            className="border border-gray-400 px-3 py-2 mr-2 rounded-md focus:ring-2 focus:ring-purple-400 outline-none" 
                onChange={handleChange} />
            <button  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md"
            onClick={addActivity}
            disabled={newactivity.trim() === ""}
            >Add</button>
        </div>
    )
}

export default AddToDo