import React from 'react';
import './Todo.css';
import { useState } from 'react';
import TodoForm from './TodoForm.js';
import Todo from './Todo';

function TodosList() {
    const [todos, setTodos] = useState([
        {
            text: "Test1",
            isCompleted: false
        },
        {
            text: "Test2",
            isCompleted: false
        },
        {
            text: "Test3",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    return (
        <div className="Main">
            <h1>Todo list app</h1>
            <TodoForm addTodo={addTodo} />
            <div className="todoList">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                    />
                ))}

            </div>
        </div>
    );
}

export default TodosList;
