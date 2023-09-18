import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Login } from './index';

describe('Login', () => {
  it('renders without errors', () => {
    render(<Login />);
  });

  it('handles form submission', () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailInput = getByPlaceholderText('seu@email.com');
    const passwordInput = getByPlaceholderText('******');
    const loginButton = getByText('Entrar');

    fireEvent.changeText(emailInput, 'joao@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);
  });

  it('navigates to signup screen when "Criar uma conta" button is pressed', () => {
    const { getByText } = render(<Login />);
    const createAccountButton = getByText('Criar uma conta');

    fireEvent.press(createAccountButton);
  });
});
