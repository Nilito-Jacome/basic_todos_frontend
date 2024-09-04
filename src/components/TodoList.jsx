//import "./TodoList.css";
import '../css/TodoList.css'
import { useState, useEffect } from 'react';
import { getTodos, deleteTodo } from './api';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  const handleSave = async () => {
    const data = await getTodos();
    setTodos(data);
    setEditingTodo(null);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      {editingTodo ? (
        <TodoForm className="todo-form" todo={editingTodo} onSave={handleSave} onCancel={() => setEditingTodo(null)} />
      ) : (
        <TodoForm onSave={handleSave} onCancel={() => setEditingTodo(null)} />
      )}
      <ul>
        {todos.map(todo => (
          <li className="todo-item" key={todo.id}>
            <li className="listado">
            <span>Title : <span style={{ color: 'chocolate' }}>{todo.title}</span></span>
            <span>Description : <span style={{ color: 'chocolate' }}>{todo.description}</span></span>
            <span style={{ color: todo.isCompleted ? 'chocolate' : 'red' }}>
            {todo.isCompleted ? 'Completed' : 'Not Completed'} </span>
            </li>
            <div className="todo-actions" >
            <button className="todo-actions" onClick={() => handleEdit(todo)}>Edit</button>
            <button className="todo-actions" onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
