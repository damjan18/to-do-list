import { useState } from "react";

function TodoForm({onAdd}) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText("");
    };


    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input 
                className="flex-grow border rounded-1-md px-3 py-2 focus:outline-none"
                type="text"
                placeholder="Add Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;