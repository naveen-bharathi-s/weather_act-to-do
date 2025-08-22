import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LandingPage from './components/LandingPage'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [users, setusers] = useState([{
        username: "naveen",
        password : "123"
    }])

  return (
    // <div className='bg-black p-14'>
    //   <div className='bg-white p-10 border rounded-md'>
    //     <Header />
    //     <ToDoContainer />
    //   </div> 
    // </div>

    <BrowserRouter>
      <div className='bg-black p-6 md:p-16'>
        <div className='bg-white p-12 border rounded-md'>
          <Routes>
            <Route path='/' element={<Login users={users} setusers={setusers} />} />
            <Route path='/signup' element={<SignUp users={users} setusers={setusers}/>} />
            <Route path='/weather_Act-to-do' element={<LandingPage users={users}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
