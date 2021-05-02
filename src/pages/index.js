import * as React from "react"
import Paper from "@material-ui/core/Paper"
import { Button } from "@material-ui/core"
import bubbleSort from "../sorts/bubbleSort"
import quickSort from "../sorts/quickSort"
import insertionSort from "../sorts/insertionSort"
import heapSort from "../sorts/heapSort"
import { shuffleArray } from "../utils"
import "../styles/global.css"
import countingSort from "../sorts/countingSort"

const defaultValue = Array.from(Array(100).keys())

const HomePage = () => {
  const [data, setData] = React.useState(shuffleArray(defaultValue))
  const [isRunning, setIsRunning] = React.useState(false)

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
      <Paper>
        <CreateGraph data={data} />
        <Button onClick={reset}>Reset</Button>
        <Button onClick={() => sort(bubbleSort)}>Bubble Sort</Button>
        <Button onClick={() => sort(insertionSort)}>Insertion Sort</Button>
        <Button onClick={() => sort(quickSort)}>Quick Sort</Button>
        <Button onClick={() => sort(heapSort)}>Heap Sort</Button>
        <Button onClick={() => sort(countingSort)}>Counting Sort</Button>
      </Paper>
    </main>
  )
}

export default HomePage
