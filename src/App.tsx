import React, { useState } from 'react';
import './app.css';

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: new Date().getTime(),
        text: inputValue
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
    <h2>Todo List</h2>
     <div className='input_box'>
     <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite a atividade"
      />
      <button onClick={handleAddTodo}>Add</button>
     </div>

      <ul className='list_item'>
        {todos.map(todo => (
          <li key={todo.id}>
            <p className='list_content'>{todo.text}</p>
            <button className='btn_delete' onClick={() => handleDeleteTodo(todo.id)}>Detelar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
