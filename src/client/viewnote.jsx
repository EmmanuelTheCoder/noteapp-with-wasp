// import useAuth from '@wasp/auth/useAuth.js'

// const {data: user} useAuth()
import {Link} from 'react-router-dom';

export let getNewNote;
const HandleFilter = (note, noteItem) => {
    const singleNote = note.filter(item => item.id === noteItem.id)
    // useUserNote(singleNote)
    getNewNote = singleNote;
    return getNewNote;
}


const Note = ({note, user}) => {
    localStorage.setItem("userDetail", JSON.stringify(user))

   return(
       <div className='view-note-parent'>
        {!note?.length && <div style={{textAlign: 'center', fontSize: '1.2rem', margin: "4rem .2rem", color: 'red'}}> You don't have any not yet. Click the add button to add a note</div>}
    {note.map(items => {
        
        return(
            
            
                <div key={items.id} className="note-container" 
                onClick={() => HandleFilter(note, items)}>
                
                <Link to="/edit">
                    <h3 className="note-title">{items.title}</h3>
                </Link>
                    
                    <hr />
                    <p className="note-body">{items.body}</p>
                </div>

                
)
})}
</div>
   )
}

export default Note;
