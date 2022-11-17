// App.jsx

// components
import WordInput from "./components/textInput.jsx"
import {useState} from 'react'


// styling
import './App.css';
import Vowelizer from "./components/vowelizer.jsx";

function App() {
  const[word, setWord] = useState("")

  // render
  return (
    <div className="App"> {/* important: we must always return ONE parent element */}
      <h2 id="my-header">Destin's Vowely Boi</h2>
      <WordInput setWord={setWord}/>
      <Vowelizer word = {word}/>
    </div>
  )
}

export default App; 