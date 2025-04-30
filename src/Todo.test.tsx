/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />


import { fireEvent, render, screen } from '@testing-library/react';

import TodoApp from './assets/TodoApp';

test('renders the todo input', () => {
    render(<TodoApp />)
    expect(screen.getByPlaceholderText(/enter a todo/i)).toBeInTheDocument();
});


test('adds a todo when clicking the add button', () => {
    render(<TodoApp />);

    //1. Find input and button

    const input = screen.getByPlaceholderText(/enter a todo/i);



    const addButton = screen.getByRole('button', { name: (/add/i) });

    //2. Simulate typing into the input
    fireEvent.change(input, { target: { value: 'Get groceries' } });

    //3. Simultae clicking add button
    fireEvent.click(addButton);

    //4. What I expect to see, new todo in the list
    expect(screen.getByText('Get groceries')).toBeInTheDocument();

});


test('adds a todo when user clicks enter', () => {
    render(<TodoApp />);


    const input = screen.getByPlaceholderText(/enter a todo/i);


    //Simulate typing
    fireEvent.change(input, { target: { value: 'Learn python' } });

    //Simulate user pressing enter
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    //Check if expected outcome is displayed
    expect(screen.getByText(/Learn python/i)).toBeInTheDocument();


});

test('todo is removed from the list when remove button is clicked', () => {
    render(<TodoApp />);

    //Find the todo item and 
    const input = screen.getByPlaceholderText(/enter a todo/i);

    fireEvent.change(input, { target: { value: 'Make new app' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    //Confirm it's there 


    const removeButton = screen.getByRole('button', { name: /remove/i });

    //Simulate the user pressing remove button
    fireEvent.click(removeButton);

    //I expect to see todo item deleted from array
    expect(screen.queryByText(/make new app/i)).not.toBeInTheDocument();

})

test('strikes through todo when checkbox is clicked', () => {
    render(<TodoApp />);

    const [input] = screen.getAllByPlaceholderText(/enter a todo/i);
    fireEvent.change(input, { target: { value: 'Read a book' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });


    //Confirm todo is added to the document
    const todoItem = screen.getByText(/read a book/i);
    expect(todoItem).toBeInTheDocument();

    //Find checkbox

    const checkbox = screen.getByRole('checkbox');


    fireEvent.click(checkbox);

    expect(todoItem).toHaveClass('line-through')
})

