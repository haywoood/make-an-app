import React from "react"
import { observer as ui } from 'mobx-react';
import { observable as state } from 'mobx';

const appState = state({
  count: 0
})

const resetCount = () => {
  appState.count = 0
}

const incrementCount = () => {
  appState.count = appState.count + 1
}

const decrementCount = () => {
  appState.count = appState.count - 1
}

const App = ui(() => (
  <div style={{display: "flex", flexDirection: "column", width: 300}}>
    <h1 onClick={resetCount}>
      <strong>current count: {appState.count}</strong>
    </h1>

    <button onClick={incrementCount}>
      increment count
    </button>
  
    <br />
  
    <button onClick={decrementCount}>
      decrement count
    </button>
  </div>
))

export default App