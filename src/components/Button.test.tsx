import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Click Me button', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const buttonText = screen.getByText(/Click Me/i);
    expect(buttonText).toBeInTheDocument();
});
