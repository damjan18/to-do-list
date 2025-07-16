import './App.css'
import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, {text, id: Date.now()}]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };



  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='bg-white shadow-md rounded-xl p-6 w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-4 text-center'>📝 To-Do List</h1>
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App
