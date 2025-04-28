
import { useState, useRef } from 'react';

function TodoApp() {
    //I need to track what the user is typing inthe input box.
    //i'll create a piece of state called 'todo' and it starts as an empty string.

    console.log('TodoApp rendered');

    const [todo, setTodo] = useState('');
    //Need to store the list of Todos
    const [todos, setTodos] = useState<string[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);


    function handleAddTodo() {
        //if input is empty, don't add anything
        if (todo.trim() === '') return;
        setTodos([...todos, todo]);
        //clear the input box after
        setTodo('');

        //Focus input  box
        inputRef.current?.focus()
    }

    function handleRemoveTodo(todoToRemove: string) {
        setTodos(todos.filter((todo) => todo !== todoToRemove));

    }

    return (
        <div className='min-h-screen bg-yellow-100 flex-items-center justify-left'>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter a todo"
                //value comes from state
                value={todo}
                //update the state using setTodo
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTodo();
                    }
                }}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddTodo}
            >
                Add</button>
            <h2>To do:</h2>
            <ul>

                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                            onClick={() => handleRemoveTodo(todo)}
                        >
                            Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoApp;