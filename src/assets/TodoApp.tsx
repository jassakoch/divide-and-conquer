
import { useState } from 'react';

function TodoApp() {
    //I need to track what the user is typing inthe input box.
    //i'll create a piece of state called 'todo' and it starts as an empty string.
    const [todo, setTodo] = useState(' ');
    //Need to store the list of Todos
    const [todos, setTodos] = useState<string[]>([]);




function handleAddTodo() {
    //if input is empty, don't add anything
    if(todo.trim() === '') return;
    setTodos([...todos, todo]);
    //clear the input box after
setTodo('');
}

return (
    <div>
    <input type="text"
    placeholder="Enter a todo"
    //value comes from state
    value={todo}
    //update the state using setTodo
    onChange={(e)=> setTodo(e.target.value)  }
    />
    <button onClick={handleAddTodo}>Add</button>

    <ul>
        
        {todos.map((item,index)=> (
            <li key={index}>{item}</li>
        ))}
    </ul>
    </div>
);
}
export default TodoApp;