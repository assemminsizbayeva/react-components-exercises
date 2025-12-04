
import { useState } from 'react';
import { StudentCard } from './StudentCard';

export function StudentFilter({ students }) {
    const [showOnlyGroup, setShowOnlyGroup] = useState('all');

    const filteredStudents = showOnlyGroup === 'all'
        ? students
        : students.filter(student => student.group === showOnlyGroup);

    const groups = ['all', 'SE-101', 'SE-102', 'SE-103'];

    return (
        <div className="student-filter">
            <div className="filter-buttons">
                {groups.map(group => (
                    <button
                        key={group}
                        onClick={() => setShowOnlyGroup(group)}
                        style={{
                            backgroundColor: showOnlyGroup === group ? '#007bff' : '#6c757d',
                            color: 'white'
                        }}
                    >
                        {group === 'all' ? 'All' : group}
                    </button>
                ))}
            </div>

            <div className="filtered-students">
                {filteredStudents.map(student => (
                    <StudentCard
                        key={student.id}
                        name={student.name}
                        group={student.group}
                        track={student.track}
                    />
                ))}
            </div>
        </div>
    );
}