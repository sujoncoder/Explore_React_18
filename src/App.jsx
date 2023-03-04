import React, { useState } from "react"
import First from "./components/First"
import Second from "./components/Second"

function App() {
const [count, setCount] = useState(0)
const handleCounter = () => setCount(count+1);

  return (
    <div>
      <First count={count} handleCounter={handleCounter}/>
      <Second count={count} handleCounter={handleCounter}/>
    </div>
  )
}

export default App
