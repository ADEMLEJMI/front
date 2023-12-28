import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/UserSlice'

const Navbar = () => {
  const dispatch=useDispatch()
  const{isAuth}=useSelector(state=>state.user)
  return (
    <div className='Navbar'>
      {isAuth?(
        <div>
          <Link to="/">Home</Link>
          <button onClick={()=>dispatch(logout())}>logout</button>
          </div>
      ):<div className='navbar aa
      '>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

    </div>}
    </div>
  )
}

export default Navbar