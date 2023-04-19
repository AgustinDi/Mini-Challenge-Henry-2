import {data} from './helper/activity.json'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Mini Challenge Henry 2</h1>
      <ol>
        {data.map(x=><li>{x}</li>)}
      </ol>
    </div>
  )
}

export default App
