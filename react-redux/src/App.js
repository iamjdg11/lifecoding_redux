import './App.css';
import Reat, { Component } from 'react'

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <AddNumber/>
      </div>
    )
  }
}

class AddNumber extends Component {
  render() {
    return (
      <div>
        <input type="button" value="+" />
        <input type="text" placeholder='number..'/>

      </div>
    )
  }
}

class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <DisplayNumber/>
      </div>
    )
  }
}

class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      hello world!
    </div>
  );
}

export default App;
