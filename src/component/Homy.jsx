import React from 'react'

export default function Homy(props) {
  return (
    <>
<div className="card">
  
  <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.des}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>

  </div>
</div>
    </>
  )
}
