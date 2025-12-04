
export function Card({ children }) {
    return (
        <div className="card" style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '10px'
        }}>
            {children}
        </div>
    );
}