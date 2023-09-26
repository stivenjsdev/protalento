import { useState } from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    console.log('adding task...');
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleDeleteTask = (index) => {
    const newTodoList = todos.filter((todo, i) => i !== index);
    setTodos(newTodoList);
  };

  return (
    <>
      <h1>Task List</h1>
      <input
        className="task-field"
        type="text"
        placeholder="Type your task here..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button
        className="task-button"
        type="button"
        onClick={handleAddTask}
      >
        add task
      </button>

      <ul className="task-list">
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            todo={item}
            handleDelete={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
    </>
  );
}
