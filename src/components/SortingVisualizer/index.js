import * as React from "react"
import { Button } from "@material-ui/core"
import {
  bblSortV2,
  getBblSortData,
  getBblSortInfo,
} from "../../sorts/bubbleSort"
import {
  insertionSortV2,
  getInsertionSortData,
  getInsertionSortInfo,
} from "../../sorts/insertionSort"
import DataViewer from "../DataViewer"
import "../../styles/global.css"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const SortingVisualizer = () => {
  const [data, setData] = React.useState()
  const [info, setInfo] = React.useState()
  const [isRunning, setIsRunning] = React.useState(false)
  const [interactive, setInteractive] = React.useState(false)

  function reset() {
    if (!isRunning) setData(undefined)
    else window.location.reload()
  }

  async function sort(func, getDataFunc, getInfoFunc) {
    if (isRunning) return

    setIsRunning(true)

    const initialData = getDataFunc()
    setData(initialData)

    const info = getInfoFunc()
    setInfo(info)

    await func(initialData, setData, interactive)

    setIsRunning(false)
  }

  return (
    <main>
      <title>Home Page</title>
      <FormControlLabel
        control={
          <Switch
            checked={interactive}
            onChange={() => setInteractive(!interactive)}
            name="interactive"
            color="primary"
          />
        }
        label={
          interactive
            ? "Interactive Mode Enabled: Press Space bar or touch screen to advance"
            : "Interactive Mode"
        }
      />
      <>
        <DataViewer data={data} info={info} />
        <Button onClick={reset}>Reset</Button>
        <Button onClick={() => sort(bblSortV2, getBblSortData, getBblSortInfo)}>
          Bubble Sort
        </Button>
        <Button
          onClick={() =>
            sort(insertionSortV2, getInsertionSortData, getInsertionSortInfo)
          }
        >
          Insertion Sort
        </Button>
        <Button>Quick Sort</Button>
        <Button>Heap Sort</Button>
        <Button>Counting Sort</Button>
      </>
    </main>
  )
}

export default SortingVisualizer
