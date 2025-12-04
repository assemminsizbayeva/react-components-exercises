
import { useState } from 'react';

export function LivePreview() {
    const [text, setText] = useState('');

    return (
        <div className="live-preview">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <p>You typed: {text || "nothing yet..."}</p>
        </div>
    );
}