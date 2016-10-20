import { state, ui, render } from "@lsdafjklsd/essence"
import Counter, { getCounterDefaultState } from "./counter"


// State
const AppState = state({
  counterApps: [getCounterDefaultState()]
})


// Actions
const handleDeleteCounterApp = (counterApps, id) =>
  counterApps.replace(
    counterApps.filter( counterApp => counterApp.count.id != id )
  )

const addCounterApp = counterApps =>
  counterApps.push(getCounterDefaultState())


// View
const App = ui(props =>
  <div style={{width: 300, display: "flex", flexDirection: "column"}}>
    <h1>Counter Apps</h1>
    {props.counterApps.map(counterApp =>
      <Counter count={counterApp.count}
               handleDelete={id => handleDeleteCounterApp(props.counterApps, id)} />
    )}
    <div>
      Add a new counter: <button onClick={() => addCounterApp(props.counterApps)}>+</button>
    </div>
  </div>
)


render(<App counterApps={AppState.counterApps} />, "root")