import * as React from "react"
import { renderValueComponent } from "./utils"

const DataViewer = props => {
  const data = props.data
  const info = props.info

  if (!data) {
    return <div>No Data Loaded</div>
  }

  const valueComponents = Object.entries(data).map(([key, value]) => {
    return (
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        {renderValueComponent(key, value, info)}
      </div>
    )
  })

  return (
    <>
      <h2>{info.title}</h2>
      <div>{info.description}</div>
      <div style={{ paddingTop: 20 }}>
        {valueComponents.map(c => {
          return c
        })}
      </div>
    </>
  )
}

export default DataViewer
