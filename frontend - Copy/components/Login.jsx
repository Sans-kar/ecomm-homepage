import { useState } from 'react';   
import React from 'react';

import './Login.css';

function loginUser(credentials) {
    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })
      .then(res => res.json())
   }
   
   export function Login({ setToken }) {
     const [username, setUserName] = useState();
     const [password, setPassword] = useState();
   
     const handleSubmit = async e => {
       e.preventDefault();
       const token = await loginUser({
         username,
         password
       });
       setToken(token.token);
     }
   
     return(
       <div className="login-wrapper">
         <h1>Please Log In</h1>
         <form onSubmit={handleSubmit}>
           <label>
             <p>Username</p>
             <input type="text" onChange={e => setUserName(e.target.value)} />
           </label>
           <label>
             <p>Password</p>
             <input type="password" onChange={e => setPassword(e.target.value)} />
           </label>
           <div>
             <button type="submit">Submit</button>
           </div>
         </form>
       </div>
     )
   }