import React from "react"
import { useState } from "react"
import { postUser } from "../api/getPosts"
import { useNavigate } from "react-router-dom"
const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
    function submitUserInfo(e) {
        e.preventDefault();
        if(!username){
            setErrorMessage('Enter a Valid Username')
        }
        postUser(username,password).then((result) => {
            console.log(result)
            if(result.success){
                navigate('/Login')
            } else {
                setErrorMessage(result.error.message)
                
            }
        }).catch((err) => {
            
        });
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        
    }
return (
    <div>
        <h1>Register</h1>
        <form className="user-input" onSubmit={submitUserInfo}>
            <input placeholder="Username"
            type='text'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}></input>
            <input 
            placeholder="Password" 
            type= 'password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}></input>
            <input 
            placeholder="Confirm Password" 
            type= 'password'
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}></input>
            <button type='submit'>Register</button>
        </form>
        <p className="errorMessage">{errorMessage}</p>
    </div>
)
}
export default Register