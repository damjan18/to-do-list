
import { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [newText, setNewText] = useState("");

 
  useEffect(() => {
    axios.get("http://localhost:8000/api/to-do/")
      .then(res => setTodos(res.data))
      .catch(err => console.error("Greška pri dohvatanju TODO:", err));
  }, []);


  const addTodo = (e) => {
    e.preventDefault();
    if (!newText.trim()) return;
    axios.post("http://localhost:8000/api/to-do/", { text: newText })
      .then(res => {
        setTodos([res.data, ...todos]);
        setNewText("");
      })
      .catch(err => console.error("Greška pri dodavanju TODO:", err));
  };

 
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8000/api/to-do/${id}/`)
      .then(() => {
        setTodos((prev) => prev.filter(todo => todo.id !== id));
      })
      .catch(err => console.error("Greška pri brisanju TODO:", err));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">TODO Lista</h1>

      <div className="flex mb-4">
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Dodaj novi zadatak..."
          className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600"
        />
        <button
          onClick={(e) => addTodo(e)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
        >
          Dodaj
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

