import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useOutletContext} from "react-router-dom"
import { loginUser } from "../api/getPosts"
const Login = () => {
    const setToken = useOutletContext()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
const navigate = useNavigate()
function submitLoginForm(e) {
    e.preventDefault()
    loginUser(username, password).then(res => {
        console.log('ran')
        if(res.success) {
            const token = res.data.token
            setToken(token)
            console.log(token)
            localStorage.setItem('username', username)
            localStorage.setItem('saved_token', JSON.stringify(token))
            navigate('/Profile')
        } else {
            console.log(res)
        }
    })
}
return (
    <div>
        <h1>Login</h1>
        <form className="user-input" onSubmit={(e) => {submitLoginForm(e)}}>
        <input placeholder="Username"
            type='text'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}></input>
            <input 
            placeholder="Password" 
            type= 'password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}></input>
        <button type='submit'>Login</button>
        </form>
    </div>
)

}

export default Login