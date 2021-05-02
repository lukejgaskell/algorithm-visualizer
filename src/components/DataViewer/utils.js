import * as React from "react"
import ArrayViewer from "./ArrayViewer"
import IntegerViewer from "./IntegerViewer"

export function renderValueComponent(key, value, info) {
  if (value === undefined || value === null) {
    return <div>No Value for {key}</div>
  }

  const dataInfo = info.dataInfo[key]

  console.log(value)

  switch (dataInfo.type) {
    case "array":
      return (
        <ArrayViewer key={key} name={key} value={value} dataInfo={dataInfo} />
      )
    case "integer":
      return (
        <IntegerViewer key={key} name={key} value={value} dataInfo={dataInfo} />
      )
    default:
      return (
        <div key={key}>
          No Viewer found for data type <strong>{dataInfo.type}</strong>
        </div>
      )
  }
}
