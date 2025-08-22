import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = ({ users, setusers }) => {

    const navigate = useNavigate()
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")


    const handleUInput = ((evt) => {
        setEusername(evt.target.value)
    })
    const handlePInput = ((evt) => {
        setEpassword(evt.target.value)
    })
    const addUser = (() => {
        setusers([...users,{username:eusername, password:epassword}])
        navigate("/")
    })

    return (
        <div>
            <h1 className='text-2xl font-bold'>Hey Hi</h1>
            <p>Sign Up Here :)</p>
            <input type="text" onChange={handleUInput}
            placeholder='Username' className='border border-black m-1 p-1 rounded-md' /> <br />
            <input type="text" onChange={handlePInput}
            placeholder='Password' className='border border-black m-1 p-1 rounded-md' /> <br />
            <input type="text" placeholder='Confirm Password' className='border border-black m-1 p-1 rounded-md' /> <br />
            <button className='px-2 py-1 m-2 bg-orange-400 rounded-md'
            onClick={addUser}
            disabled={!(eusername?.trim() && epassword?.trim())}>
                Sign Up</button>
            <p>Already have an account ? <Link to="/" className='underline text-blue-800' >Login</Link></p>
        </div>

    )
}

export default SignUp