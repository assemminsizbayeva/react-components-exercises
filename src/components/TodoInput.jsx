
import { useState } from 'react';

export function TodoInput({ onAdd }) {
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim()) {
            onAdd(input);
            setInput('');
        }
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task..."
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}