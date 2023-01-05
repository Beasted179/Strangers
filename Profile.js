import React from "react"
const Profile = () => {
    const username = localStorage.getItem('username')
return (
    <div>
        <h1>Profile</h1>
        <h2>Welcome {username}</h2>
    </div>
    
)

}

export default Profile