import React, { useState } from 'react'

const ToDoList = ({item, setitem}) => {

    const handleDelete = ((id) => {
        const updatedList = [...item]
        updatedList.splice(id, 1)
        setitem(updatedList)
    })

    return (
        <div className='flex-grow w-full bg-purple-600 p-2 rounded text-white'>
            <h1 className='text-2xl font-medium mb-2'>Today's Activity...!</h1>
            {item.length === 0 ? (<p>You haven't added any activity yet</p>) : ""}
            {item.map((list, index) => {
                return (
                    <div className='flex justify-between my-1' key={index}>
                        <p key={index}>{index + 1}.{list.activity} </p>
                        <button className='bg-red-500 text-white px-2 py-1 rounded'
                            onClick={() => handleDelete(index)}>Del</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ToDoList