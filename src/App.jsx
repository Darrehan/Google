// Man app.jsx file
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Notes from './components/Notes'
import notes from '../notes'
function App() {
 

  return (
    <>
      <div>
      <Header/>
       {notes.map((note)=>{
        return(
          <Notes
            Key={note.id}
            title={note.title}
            content={note.content}
          />
        );
       })}
      <Footer/>
      </div>
    </>
  )
}

export default App
