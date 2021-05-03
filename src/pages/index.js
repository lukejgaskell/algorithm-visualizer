import * as React from "react"
import Paper from "@material-ui/core/Paper"
import { Button } from "@material-ui/core"
import bubbleSort from "../sorts/bubbleSort"
import quickSort from "../sorts/quickSort"
import insertionSort from "../sorts/insertionSort"
import heapSort from "../sorts/heapSort"
import { shuffleArray } from "../utils"
import "../styles/global.css"
import SortingVisualizer from "../components/SortingVisualizer"
import countingSort from "../sorts/countingSort"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const defaultValue = Array.from(Array(100).keys())

const HomePage = () => {
  const [data, setData] = React.useState(shuffleArray(defaultValue))
  const [isRunning, setIsRunning] = React.useState(false)
  const [v2, setV2] = React.useState(true)

  function reset() {
    if (!isRunning) setData(shuffleArray(defaultValue))
    else window.location.reload()
  }

  async function sort(func) {
    if (isRunning) return

    setIsRunning(true)

    await func(data, setData)

    setIsRunning(false)
  }

  function CreateGraph(props) {
    return (
      <div style={{ height: 200, display: "flex", alignItems: "flex-end" }}>
        {props.data.map((v, index) => (
          <span
            className="data-column"
            key={index}
            style={{
              height: v,
            }}
          ></span>
        ))}
      </div>
    )
  }

  return (
    <main>
      <title>Home Page</title>
      <FormControlLabel
        control={
          <Switch
            checked={v2}
            onChange={() => setV2(!v2)}
            name="v2"
            color="primary"
          />
        }
        label={v2 ? "v2" : "v1"}
      />
      {v2 ? (
        <SortingVisualizer />
      ) : (
        <Paper>
          <CreateGraph data={data} />
          <Button onClick={reset}>Reset</Button>
          <Button onClick={() => sort(bubbleSort)}>Bubble Sort</Button>
          <Button onClick={() => sort(insertionSort)}>Insertion Sort</Button>
          <Button onClick={() => sort(quickSort)}>Quick Sort</Button>
          <Button onClick={() => sort(heapSort)}>Heap Sort</Button>
          <Button onClick={() => sort(countingSort)}>Counting Sort</Button>
        </Paper>
      )}
    </main>
  )
}

export default HomePage
