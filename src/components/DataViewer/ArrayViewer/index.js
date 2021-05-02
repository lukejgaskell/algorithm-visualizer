import * as React from "react"

const ArrayViewer = props => {
  const name = props.name
  const value = props.value
  const dataInfo = props.dataInfo

  return (
    <>
      <div>{name}:</div>
      <div style={{ height: 200, display: "flex", alignItems: "flex-end" }}>
        {value.map((v, index) => (
          <span
            className="data-column"
            key={index}
            style={{
              height: v,
            }}
          ></span>
        ))}
      </div>
      <div>{dataInfo.description}</div>
    </>
  )
}

export default ArrayViewer
