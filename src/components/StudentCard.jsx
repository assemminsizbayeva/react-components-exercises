
export function StudentCard({ name, group, track }) {
    return (
        <div className="student-card">
            <h3>{name}</h3>
            <p>Group: {group}</p>
            <p>Track: {track}</p>
        </div>
    );
}