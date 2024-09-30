import { useState } from "react"

const Counter = () => {
    const [num, setNum] = useState(5)
    
    const plus1Handler = () => setNum(num + 1)
    const plus2Handler = () => setNum(num + 2)
    const plus5Handler = () => setNum(num + 5)
    const minus1Handler = () => setNum(num - 1)
    const minus2Handler = () => setNum(num - 2)
    const minus5Handler = () => setNum(num - 5)
    const resetHandler = () => setNum(5)
    
    return (
        <div>
            <h3 style={{ color: num < 5 ? 'red' : 'green' }}>{num}</h3>
            <button onClick={plus5Handler} disabled={num > 5}>+5</button>
            <button onClick={plus2Handler} disabled={num >= 9}>+2</button>
            <button onClick={plus1Handler} disabled={num > 9}>+</button>
            <button onClick={minus1Handler} disabled={num <= 1}>-</button>
            <button onClick={minus2Handler} disabled={num <= 2}>-2</button>
            <button onClick={minus5Handler} disabled={num <= 5}>-5</button>
            <button type="reset" onClick={resetHandler}>Reset</button>
        </div>
    )
  
}

export default Counter