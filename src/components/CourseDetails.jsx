
import { useState } from 'react';

export function CourseDetails() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="course-details">
            <h3>React Fundamentals</h3>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide details" : "Show details"}
            </button>
            {showDetails && (
                <p>
                    This course covers React basics including components,
                    props, state, and hooks. Duration: 4 weeks.
                </p>
            )}
        </div>
    );
}