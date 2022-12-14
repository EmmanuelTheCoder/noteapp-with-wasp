import './Main.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import getNote from '@wasp/queries/getNote'
import { useQuery } from '@wasp/queries'
import Note from './viewnote.jsx'
import createNote from '@wasp/actions/createNote'
import logout from '@wasp/auth/logout.js'



const BetaNote = ({user}) => {
  const [isTrue, setIsTrue] = useState(false)
  const AddNote = () =>{
    const handleNoteSubmit = async (e) => {
      e.preventDefault()
      try{
        const body = e.target.body.value;
        const title = e.target.title.value
        setIsTrue(!isTrue)
        e.target.reset()
        await createNote({title, body})
      }catch(err){
        window.alert('An error occured: ' + err.message)
      }
    }
    
    return (
      <div className="modal"  style={{display: isTrue ? 'block' : 'none'}}>
            <h3>Edit Note</h3>
            <form onSubmit={handleNoteSubmit}>
                <input type="text" defaultValue="" name="title" placeholder='Title'/>
                <textarea name="body" defaultValue="" id="note" cols="30" row="30" placeholder='body'>
                    
                </textarea>
                <button>Add note</button>
            </form>
        </div>
      
    )
  }
//end



  const {data: notes, isFetching, error} = useQuery(getNote)
  
 
  return (
    <div>
    <div className="header">
  
      <img src="https://img.icons8.com/ios-filled/50/FAB005/note.png" alt="icon"/>
      <h2 className="betanotes">BetaNotes</h2>
    </div>
      {user && <p className='welcome'>Welcome, <span>{user.username}</span></p>}
      <AddNote />
      {notes && <Note note={notes} user={user}/>}
      {isFetching && <p>Wait a second while we fetch your notes</p>}
      {error && 'An error occured: ' + error}

      <button onClick={logout}>Logout</button>
      <div className='add-note'>
        <img src="https://img.icons8.com/ios-filled/50/FD7E14/plus-2-math.png" onClick={() => setIsTrue(!isTrue)}/>
      </div>
      <Link to="/">
        <button>Home</button>
      
      </Link>
    </div>
  )
}
export default BetaNote
