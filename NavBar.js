import { React, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const NavBar = ({token, setToken}) => {
    console.log(token)
    const navigate = useNavigate()
    function logOut(){ 
        localStorage.removeItem('username')
        localStorage.removeItem('saved_token')
        navigate('/login')
        setToken('')
    }
return (
    <div className='nav-body'>
        <div className="site-title">
        <h1>Strangers Things</h1>
    </div>
    <nav className="nav-links">
        <ul>
            <li>
                {
                    (!token) ? <Link to='/'>Home</Link> : null
                }

            </li>
           
            <li>
            {(!token) ? <Link to='Register'>Register</Link> : null }
            </li>
            <li>
                <Link to='Posts'>Posts</Link>
            </li>
            <li>
                {(token) ? <Link to='Profile'>Profile</Link> : null }
            </li>
            <li>
                {
                (!token) ? <Link to='Login'>Login</Link> : <button className='logOut' onClick={logOut}>Log Out</button>   
                }
            </li>
        </ul>
    </nav>
    </div>
    





)

}

export default NavBar