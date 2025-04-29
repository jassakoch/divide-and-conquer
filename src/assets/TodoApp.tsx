
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
        <div className='min-h-screen bg-white-100 flex-items-center justify-left'>
            <div className='big-white p-6 rounded-lg shadow-md w-full -max-w-md'>
                <h1 className='text-3xl mb-4 text-center'>To-Do List</h1>
            <input
            className='font-[Patrick-Hand]'
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
            
            <ul 
            className='bg-yellow-100  text-left rounded-md shadow-inner space-y-w m-15 font-[Patrick_Hand] border-dashed border-yellow-400'>

                {todos.map((todo, index) => (
                    <li 
                    
                    key={index}
                    className='flex items-center justify-start space-x-3 m-5 p-3'>
                        <input type="checkbox" className='form-checkbox h-5 w-5'/>
                        {todo}
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                            onClick={() => handleRemoveTodo(todo)}
                        >
                            Remove</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}
export default TodoApp;