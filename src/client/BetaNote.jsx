import './Main.css'
import getNote from '@wasp/queries/getNote'
import { useQuery } from '@wasp/queries'
import Note from './viewnote.jsx'
import createNote from '@wasp/actions/createNote'
import logout from '@wasp/auth/logout.js'

const AddNote = () =>{
  const handleNoteSubmit = async (e) => {
    e.preventDefault()
    try{
      const body = e.target.body.value;
      const title = e.target.title.value
      e.target.reset()
      await createNote({title, body})
    }catch(err){
      window.alert('An error occured: ' + err.message)
    }
  }
  return (
    <form onSubmit={handleNoteSubmit}>
      <input 
      name="title"
      type="text"
      defaultValue=''
      placeholder='note title'
      
      />
      <input 
      name="body"
      type="text"
      defaultValue=''
      placeholder='write your note'
      
      />
      
      <input type="submit" value="Add note"/>
    </form>
  )
}

const BetaNote = ({user}) => {
  const {data: notes, isFetching, error} = useQuery(getNote)
  //console.log(user)
  return (
    <div>
      {user && <p className='welcome'>Welcome, <span>{user.username}</span></p>}
      <AddNote />
      {notes && <Note note={notes} user={user}/>}
      {isFetching && <p>Wait a second while we fetch your notes</p>}
      {error && 'An error occured: ' + error}

      <button onClick={logout}>Logout</button>
    </div>
  )
}
export default BetaNote
