//import './TodoForm.css',
import '../css/TodoForm.css'
import { useState, useEffect } from 'react';
import { createTodo, updateTodo } from './api';
import PropTypes from "prop-types";

const TodoForm = ({ todo, onSave, onCancel }) => {
  const [title, setTitle] = useState(todo?.title || '');
  const [description, setDescription] = useState(todo?.description || '');
  const [isCompleted, setIsCompleted] = useState(todo?.isCompleted || false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todoData = { title, description, isCompleted };
    if (todo?.id) {
      await updateTodo(todo.id, todoData);
    } else {
      await createTodo(todoData);
    }
    onSave();
  };

  const handleCancel = () => {
    // Clear the input fields
    setTitle('');
    setDescription('');
    setIsCompleted(false);
    // Call the onCancel function
    onCancel();
  };

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setIsCompleted(todo.isCompleted);
    }
  }, [todo]);

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <label>
        Completed
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

TodoForm.propTypes = {
    todo: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };

export default TodoForm;
