
function TodoItem({ todo, onDelete }) {
  return (
    <li className="bg-white dark:bg-gray-800 p-4 rounded shadow flex justify-between items-center">
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
      >
        Obriši
      </button>
    </li>
  );
}

export default TodoItem;
