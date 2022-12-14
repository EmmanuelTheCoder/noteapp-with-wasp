import {useState} from 'react'
import {getNewNote} from './viewnote.jsx'
import { Link, useHistory} from 'react-router-dom';
import updateNote from "@wasp/actions/updateNote"
import deleteNote from "@wasp/actions/deleteNote"



export default function EditNote() {
    const history = useHistory()
    const [isTrue, setIsTrue] = useState(false)

    const backToNotes = () =>{
        setIsTrue(!isTrue)
        
    }
  
  return (
    <div>
        <div className="header">
    
            <img src="https://img.icons8.com/ios-filled/50/FAB005/note.png" alt="icon"/>
            <h2 className="betanotes">BetaNotes</h2>
        </div>
    {getNewNote.map(note => {
        const handleNoteUpdate = async (e) =>{
            e.preventDefault()
            const getUserData = localStorage.getItem("userDetail");
            const userData = JSON.parse(getUserData)
            try{
                await updateNote({
                    noteId: note.id,
                    userId: userData.id,
                    data: {
                        title: e.target.title.value,
                        body: e.target.body.value
                    }
                })
                history.push("/notes")
            } catch(err){
                window.alert("An error occured: " + err)
            }
        }
        const handleNoteDelete = async (e) =>{
            e.preventDefault()
            const getUserData = localStorage.getItem("userDetail");
            const userData = JSON.parse(getUserData)
            try{
                await deleteNote({
                    noteId: note.id,
                    userId: userData.id
                })
                history.push("/notes")
            } catch(err){
                window.alert("An error occured: " + err)
            }
        }
        return(
            <div className='edit-note-container' key={note.id}>

                <h3>{note.title}</h3>
                <p>{note.body}</p>
                <div className="buttons">
                <button onClick={handleNoteDelete}><img alt="remove note" src="https://img.icons8.com/ios-glyphs/30/FA5252/trash--v1.png" />
                </button>
                <button  onClick={()=> setIsTrue(!isTrue)}><img alt="edit" src="https://img.icons8.com/sf-black-filled/64/FD7E14/pencil.png"/></button>
                <button>
                    <Link to="/notes">
                        <img alt="home" src="https://img.icons8.com/ios-filled/50/FD7E14/home-page.png"/>
                    
                    </Link>
                </button>
                </div>
                <div className="modal"  style={{display: isTrue ? 'block' : 'none'}}>
                    <h3>Edit Note</h3>
                    <form onSubmit={handleNoteUpdate}>
                        <input type="text" defaultValue={note.title} name="title"/>
                        <textarea name="body" id="note" cols="30" row="30" defaultValue={note.body}>
                            
                        </textarea>
                        <button onClick={backToNotes}>Save edit</button>
                    </form>
                </div>
            </div>
        )
    })}
</div>
  )
}
