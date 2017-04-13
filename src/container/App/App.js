import React, { PureComponent, PropTypes } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends PureComponent {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  static defaultProps = {
    counter: 0,
  }

  render() {
    const { increment, decrement, counter } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-counter">
          <p>Counter: {counter}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    )
  }
}

export default App
