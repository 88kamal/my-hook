import React, {useState, useEffect } from 'react'

function UseState() {
  // const [count, setCount] = useState(0);
  
  // useEffect(() => {
  //   alert('kk')
    
  // }, [])
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  
  return (
    <div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
         <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  )
}

export default UseState