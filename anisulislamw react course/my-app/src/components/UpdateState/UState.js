import React, { useState } from 'react'

export default function UState() {
    const [count,setCount]=useState(0)
    const handleIncreament=()=>{
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        setCount((count)=>count+1);

    }
  return (
    <div>
        <h1>Count:{count}</h1>

        <button onClick={handleIncreament}>+</button>
      
    </div>
  )
}
