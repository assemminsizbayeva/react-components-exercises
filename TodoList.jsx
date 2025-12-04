
export function TodoList({ todos }) {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
}