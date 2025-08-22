import React, { useState } from 'react'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import { useNavigate } from 'react-router-dom'

const ToDoContainer = () => {
    const navigate = useNavigate()
    const [item, setitem] = useState([])
    const handleChange = (() =>{
         navigate("/")
    })
  return (
    <div>
        <p className='text-xl text-purple-600 font-semibold'>I assist with professional activity management :)</p>
        <div className='flex flex-col justify-center items-center gap-2 flex-wrap mt-4'>
          <AddToDo item={item} setitem={setitem} />
          <ToDoList item={item} setitem={setitem} />
        </div>
        <div className='text-right'>
            <button className='px-2 py-1 m-2 bg-purple-600 text-white rounded-md'
               onClick={handleChange} >Logout</button>
        </div>
    </div>

  )
}

export default ToDoContainer