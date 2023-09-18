import { useNavigation } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { SingUp } from './index';

jest.mock('@context/authContext', () => ({
  useAuth: () => ({ signUp: jest.fn() }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ goBack: jest.fn() }),
}));

describe('SignUp', () => {
  it('renders without errors', () => {
    render(<SingUp />);
  });

  it('calls signUp when the form is submitted with valid data', () => {
    const { getByText, getByPlaceholderText } = render(<SingUp />);
    const emailInput = getByPlaceholderText('seu@email.com');
    const firstNameInput = getByPlaceholderText('Primeiro nome');
    const lastNameInput = getByPlaceholderText('Último nome');
    const passwordInput = getByPlaceholderText('******');
    const confirmPasswordInput = getByPlaceholderText('******');
    const createAccountButton = getByText('Criar conta em aca.so');

    fireEvent.changeText(emailInput, 'joão@example.com');
    fireEvent.changeText(firstNameInput, 'João');
    fireEvent.changeText(lastNameInput, 'Carlos');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.changeText(confirmPasswordInput, 'password123');
    fireEvent.press(createAccountButton);
  });

  it('navigates back when "Voltar ao login" button is pressed', () => {
    const goBackMock = jest.fn();
    (useNavigation as any).mockReturnValue({ goBack: goBackMock });

    const { getByText } = render(<SingUp />);
    const backButton = getByText('Voltar ao login');
    fireEvent.press(backButton);
  });
});
