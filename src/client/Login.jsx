import { Link, useHistory } from 'react-router-dom'
import {useState} from 'react'
import login from '@wasp/auth/login.js'

export default function Login() {
  const history = useHistory()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleLogin = async (e) =>{
    e.preventDefault()
  
    try{
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

      <form onSubmit={handleLogin} className="val-form">
        <h3>Login</h3>
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
          <button> Login</button>
          <p>Don't have an account yet?</p> <Link to="/join">Sign up!</Link>
        </div>
      </form>
      
    </div>
  )
}

