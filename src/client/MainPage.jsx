import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="header">
  
          <img src="https://img.icons8.com/ios-filled/50/FAB005/note.png" alt="icon"/>
          <h2 className="betanotes">BetaNotes</h2>
      </div>

      <div className="body">
        <div className="hand-pen">
          <img src="https://img.icons8.com/ios/100/FD7E14/hand-with-pen.png" alt="writer logo"/>

        </div>
        <div>
            <h1 className="body-note">
              Document your thoughts, 
              improve productivity</h1>

        </div>

      </div>
            <p className="body-text">
              No more <span className="buzzword">I cannot recollect my thoughts</span>, document
              your thoughts on the go
            </p>
            <div className='style-btn'>
              <Link to="/join">
                <button>use BetaNotes</button>
              
              </Link>
              <Link to="/notes">
                <button>My notes</button>
              
              </Link>
          </div>
              
    </div>
    
  )
}
