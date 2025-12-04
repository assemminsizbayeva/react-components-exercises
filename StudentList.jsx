
import { StudentCard } from './StudentCard';

export function StudentList({ students }) {
    return (
        <div className="student-list">
            {students.map(student => (
                <StudentCard
                    key={student.id}
                    name={student.name}
                    group={student.group}
                    track={student.track || "Front-end"}
                />
            ))}
        </div>
    );
}