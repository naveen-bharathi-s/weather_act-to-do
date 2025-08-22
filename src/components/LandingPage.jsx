import React, {useEffect} from 'react'
import Header from './Header'
import ToDoContainer from './ToDoContainer'
import {useLocation, useNavigate} from 'react-router-dom'
import Weather from './Weather'

const LandingPage = () => {
    const navigate = useNavigate()
    // useEffect(() => {
    //     if(!username){
    //     navigate("/")
    // }
    // },[username])
    
    const data= useLocation()
    console.log(data.state?.user)
    const user = data.state?.user
    return (
        <div>
            <Header user={user}/>
            <hr />
            <Weather />
            <hr />
            <ToDoContainer />
        </div>
    )
}

export default LandingPage