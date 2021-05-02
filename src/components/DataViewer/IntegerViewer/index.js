import * as React from "react"

const IntegerViewer = props => {
  const name = props.name
  const value = props.value
  const dataInfo = props.dataInfo

  return (
    <>
      <div>
        {name}: {value}
      </div>
      <div>{dataInfo.description}</div>
    </>
  )
}

export default IntegerViewer
