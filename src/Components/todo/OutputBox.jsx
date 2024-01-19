import React from 'react'

function OutputBox(props) {
  return (
    <div className="output-container">
            {props.items.map((item,idx)=>{
                return <li key={idx}>{item}</li>
            })}
        </div>
  )
}

export default OutputBox