'use client'
 
import { useState } from 'react'
 
const Counter = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>You clicked {count} timessss</p>
      <button onClick={() => setCount(count + 1)}>Click mess</button>
    </div>
  )
}
export default Counter;