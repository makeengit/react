import React, { useState } from 'react'

export default function Counter() {
    let [x,setX] = useState(0)
  return (
        <>
        <h1>count is : {x}</h1>
        <button onClick={increament}>increament</button>
        <button onClick={decreament}>decreament</button>
        <button onClick={rest}>Reset</button>

        </>
  )

  function increament(){
    setX(++x)
  }
  function decreament(){
    setX(--x)
  }
  function rest(){
    setX(x=0)
  }
}
