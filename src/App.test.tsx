/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />


import { render, screen } from '@testing-library/react';
import App from './App'

test ('renders the heading', ()=> {
    render(<App />) 
    expect(screen.getByRole('heading')).toHaveTextContent(/tailwind is working!/i)
})