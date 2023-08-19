import './App.css'
import './reset.css'

function App() {
  const func = () => {
    console.log("hello")
  }

  return (
    <div className="App">
      <button onClick={func}>Observe Site</button>
      <h1 id="extensionTitle">ospo</h1>
      <span>
        <h3>Company:</h3> 
        <p>Amazon</p>
      </span>
      <span>
        <h3>Role:</h3> 
        <p>Software Engineering Intern</p>
      </span>
      
      <button>Log</button>
      <div id="somethingWrongContainer">
        <p>Something wrong?</p>
        <p><strong>Edit Details</strong></p>
        <p>or</p>
        <p><strong>Delete Record</strong></p>
      </div>
    </div>
  )
}

export default App
