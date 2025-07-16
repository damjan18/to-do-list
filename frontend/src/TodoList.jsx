function TodoList({todos, onDelete}) {
    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded-md"
                >
                    <span>{todo.text}</span>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;