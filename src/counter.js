import { ui } from "@lsdafjklsd/essence"

let id = 0
export const getCounterDefaultState = () => ({
  count: {
    id: id++,
    value: 0
  }
})

const incrementCount = count =>
  count.value = count.value + 1

export default ui(state =>
  <div style={{display: "flex", flexDirection: "column"}}>
    <h3>Current Count: {state.count.value}</h3>
    <button onClick={() => incrementCount(state.count)}>increment</button>
    <button onClick={() => state.handleDelete(state.count.id)}>delete</button>
  </div>
)