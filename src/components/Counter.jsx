
import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}