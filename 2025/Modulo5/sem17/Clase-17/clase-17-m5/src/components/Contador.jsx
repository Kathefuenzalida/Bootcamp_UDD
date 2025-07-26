import { useState } from "react"

export const Contador = () => {
    const [count, setCount] = useState(0); // count = 0
    return (
        <div>
            <h1>Contador</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button disabled={count === 0} onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    )
}