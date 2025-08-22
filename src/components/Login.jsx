import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ users, setusers }) => {

    const navigate = useNavigate()
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")
    const [ruser, setRuser] = useState(true)


    const handleUInput = ((evt) => {
        setEusername(evt.target.value)
    })
    const handlePInput = ((evt) => {
        setEpassword(evt.target.value)
    })

    const checkUser = (() => {
        // console.log(users)
        let userfound = false
        users.forEach((item) => {
            if (item.username === eusername && item.password === epassword) {
                console.log("login Successfull")
                userfound = true
                navigate("/weather_Act-to-do", {state:{user:eusername}})
            }
        })
        if (userfound === false) {
            console.log("Login Failed")
            setRuser(false)
        }
        // if(userfound === true){
        //     <Link to="/landing" />
        // }
    })


    return (
        <div>
            <h1 className='text-2xl font-bold'>Hey Hi</h1>
            {ruser ? <p>I help you manage your activities after you login :)</p> :
                <p className='text-red-800'>Please <Link to="/signup" 
                className='underline'>Sign Up</Link> Before You Login</p>}
            <input type="text" onChange={handleUInput}
                placeholder='Username' className='border border-black m-1 p-1 rounded-md' /> <br />
            <input type="password" onChange={handlePInput}
                placeholder='Password' className='border border-black m-1 p-1 rounded-md' /> <br />
            <button className='px-2 py-1 m-2 bg-purple-400 rounded-md'
                onClick={checkUser}>Login</button>
            <p>Don't have an account ? <Link to="/signup" className='underline text-blue-800' >Sign Up</Link></p>
        </div>
    )
}

export default Login