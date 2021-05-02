import * as React from "react"
import Paper from "@material-ui/core/Paper"
import { Button } from "@material-ui/core"
import { bblSortV2, getBblSortData, getBblSortInfo } from "../sorts/bubbleSort"
import { shuffleArray } from "../utils"
import DataViewer from "../components/DataViewer"
import "../styles/global.css"

const defaultValue = Array.from(Array(100).keys())

const HomePage = () => {
  const [data, setData] = React.useState()
  const [info, setInfo] = React.useState()
  const [isRunning, setIsRunning] = React.useState(false)

  function reset() {
    if (!isRunning) setData(shuffleArray(defaultValue))
    else window.location.reload()
  }

  async function sort(func, getDataFunc, getInfoFunc) {
    if (isRunning) return

    setIsRunning(true)

    const initialData = getDataFunc()
    setData(initialData)

    const info = getInfoFunc()
    setInfo(info)

    await func(initialData, setData)

    setIsRunning(false)
  }

  return (
    <main>
      <title>Home Page</title>
      <Paper>
        <DataViewer data={data} info={info} />
        <Button onClick={reset}>Reset</Button>
        <Button onClick={() => sort(bblSortV2, getBblSortData, getBblSortInfo)}>
          Bubble Sort
        </Button>
        <Button>Insertion Sort</Button>
        <Button>Quick Sort</Button>
        <Button>Heap Sort</Button>
        <Button>Counting Sort</Button>
      </Paper>
    </main>
  )
}

export default HomePage
