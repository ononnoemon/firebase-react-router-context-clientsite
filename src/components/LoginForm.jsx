import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
export const LoginForm = () => {
    const handleOnSubmit=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const pass=e.target.password.value
        console.log(email)
        createUserWithEmailAndPassword(auth,email,pass)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log(user)
          })
    }
  return (
    <div>
        <form action="" onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="email">User Email</label><br />
                <input type="email" id='email' name='email' placeholder="Enter Email" className="input" />
            </div>
            <div>
                <label htmlFor="pass">User Password</label><br />
                <input name='password' type="password" id='pass' placeholder="Enter Password" className="input" />
            </div>
            <button className="btn btn-soft btn-secondary">Secondary</button>
        </form>
    </div>
  )
}
