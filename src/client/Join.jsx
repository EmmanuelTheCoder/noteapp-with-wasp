import { Link, useHistory } from 'react-router-dom'
import {useState} from 'react'
import signup from '@wasp/auth/signup.js'
import login from '@wasp/auth/login.js'

export default function Join() {
  const history = useHistory()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSignup = async (e) =>{
    e.preventDefault()
  
    try{
      await signup({
        username: username,
        password: password
      })
      await login(username, password)
      setUsername("")
      setPassword("")
      
      history.push('/notes')
    }catch(err){
      window.alert("An error occured: " + err)
    }


  } 
  
  return (
    <div>
       <div className="header">
        <img src="https://img.icons8.com/ios-filled/50/FAB005/note.png" alt="icon"/>
        <h2 className="betanotes">BetaNotes</h2>
       

     </div> 

      <form onSubmit={handleSignup} className="val-form">
        <h3>Sign Up</h3>
        <div className='val-form-div'>

        <div>

          <label>Username:</label>
          <input type="text" value={username} 
      
          onChange={e => setUsername(e.target.value)}

          />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" value={password} 
          onChange={e => setPassword(e.target.value)}

          />
        </div>
          <button> Sign up</button>
          <p>Already have an account?</p> <Link to="/login">Login!</Link>
        </div>
      </form>
      
    </div>
  )
}

