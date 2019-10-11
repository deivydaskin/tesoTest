import React from 'react';
import './Todo.css';
import { useState } from 'react';

function TodoForm({ addTodo }) {

    const [task, setTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!task) return;
        addTodo(task);
        setTask("");
    }


    return (
        <div className="Todo">
            <form onSubmit={handleSubmit} className="TodoForm">
                <label>
                    Task:
                <input type="text" value={task} onChange={e => setTask(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default TodoForm