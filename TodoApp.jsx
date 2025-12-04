
import { useState } from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export function TodoApp() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const clearAll = () => {
        setTodos([]);
    };

    return (
        <div className="todo-app">
            <h2>Todo List</h2>
            <TodoInput onAdd={handleAddTodo} />
            <TodoList todos={todos} />
            {todos.length > 0 && (
                <button onClick={clearAll}>Clear All</button>
            )}
        </div>
    );
}