import axios from 'axios';
import './App.css';


//data will be the string I send from my server

const apiCall = () => {
  axios.get('http://localhost:8080').then((data => {
    //this console.log will be in my frontend console
    console.log(data)
  }))
}

function App ( ) {
  return (
    <div className='App'>
      <header className='App-Header'>
        <button onClick={apiCall}>Make API Call</button>
      </header>
    </div>
  )

}

export default App;