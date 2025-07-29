import { useState, useRef, useEffect } from "react"
const FocusInputExample=() => {
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleClear = () => {
        inputRef.current.value = "";
        inputRef.current.focus();
        }

  return (
    <div>
        <h2>Ejercicio con useRef y onChange</h2>
        <input
            ref={inputRef}
            type="text"
            placeholder="escriba nose nosabe..."
            onChange={(e) => setText(e.target.value)}
            />
            <button
            onClick={handleClear}
            style={{ marginLeft: '10px' }}
            >
            Limpiar y enfocar
            </button>
        <p>Texto actual: <strong>{text}</strong></p>
    </div>
  )
}

export default FocusInputExample