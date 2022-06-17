import React, {useState} from 'react'

function Form() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const click = (e) => {
        e.preventDefault()
        console.log("Email is ", email, "Password is ", password )
    }

  return (
    <div className="form">
        <form>
            <input type="email" placeholder="Enter Your email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Login" onClick={click}  />
        </form>
    </div>
  )
}

export default Form