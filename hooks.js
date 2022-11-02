import { useState } from "react";

export default function CounterHooks() {
    const [ value , setValue ]= useState(0);
}

const Increment = () => {
    setValue(value + 1)
}

const Decrement = () => {
    setValue(value - 1)
}

return(
    <div>
    <div>
        <h1>  </h1>
        <button data-test="increment" onClick={Increment}>Positive</button>
        <button data-test="increment" onClick={Decrement}>Negative</button>
    </div>
    <div>
    <p data-testid="count">{value}</p>
    </div>
    </div>
)

