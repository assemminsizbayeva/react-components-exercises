
import { Hello } from './components/Hello';
import { CourseInfo } from './components/CourseInfo';
import { StudentCard } from './components/StudentCard';
import { PrimaryButton } from './components/PrimaryButton';
import { Card } from './components/Card';
import { Layout } from './components/Layout';
import { Menu } from './components/Menu';
import { StudentList } from './components/StudentList';
import { Counter } from './components/Counter';
import { CourseDetails } from './components/CourseDetails';
import { LivePreview } from './components/LivePreview';
import { TodoApp } from './components/TodoApp';
import { StudentFilter } from './components/StudentFilter';


function App() {
    const students = [
        { id: 1, name: "Aida", group: "SE-101", track: "Front-end" },
        { id: 2, name: "Nurlan", group: "SE-102", track: "Back-end" },
        { id: 3, name: "Dastan", group: "SE-103", track: "DevOps" },
        { id: 4, name: "Aliya", group: "SE-101", track: "Front-end" },
        { id: 5, name: "Bekzat", group: "SE-102", track: "Back-end" },
    ];

    const menuLinks = ["Home", "Courses", "About", "Contact"];

    return (
        <Layout>
            <h2>Welcome, students!</h2>
            <p>This is your dashboard.</p>

            <section>
                <h3>1. Hello Component</h3>
                <Hello />
            </section>

            <section>
                <h3>2. CourseInfo Component</h3>
                <CourseInfo />
            </section>

            <section>
                <h3>3. StudentCard Component</h3>
                <StudentCard name="Aida" group="SE-101" track="Front-end" />
                <StudentCard name="Nurlan" group="SE-102" track="Back-end" />
                <StudentCard name="Dastan" group="SE-103" track="DevOps" />
            </section>

            <section>
                <h3>4. Buttons with Props</h3>
                <PrimaryButton label="Login" />
                <PrimaryButton label="Register" />
                <PrimaryButton label="Submit" type="secondary" />
            </section>

            <section>
                <h3>5. Card Wrapper</h3>
                <Card>
                    <h3>Important Notice</h3>
                    <p>Classes are online this Friday.</p>
                </Card>

                <Card>
                    <StudentCard name="Aida" group="SE-101" track="Front-end" />
                </Card>
            </section>

            <section>
                <h3>6. Menu Component</h3>
                <Menu links={menuLinks} />
            </section>

            <section>
                <h3>7. StudentList Component</h3>
                <StudentList students={students} />
            </section>

            <section>
                <h3>8. Counter Component</h3>
                <Counter />
            </section>

            <section>
                <h3>9. Course Details Toggle</h3>
                <CourseDetails />
            </section>

            <section>
                <h3>10. Live Input Preview</h3>
                <LivePreview />
            </section>

            <section>
                <h3>11. Todo App</h3>
                <TodoApp />
            </section>

            <section>
                <h3>12. Student Filter</h3>
                <StudentFilter students={students} />
            </section>
        </Layout>
    );
}

export default App;