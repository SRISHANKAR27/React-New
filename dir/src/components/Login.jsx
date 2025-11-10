import React from 'react'
import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState("");
  return (
    <div>
        <input
        className = "inpt"
        type = "text"
        placeholder = "Username" 
        value = {username}
        />
        
    </div>
  )
}

export default Login