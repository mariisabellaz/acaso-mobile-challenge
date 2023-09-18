import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { ConfirmEmail } from './index';

describe('ConfirmEmail', () => {
  it('renders without errors', () => {
    render(<ConfirmEmail />);
  });

  it('handles form submission', () => {
    const { getByPlaceholderText, getByText } = render(<ConfirmEmail />);
    const confirmationCodeInput = getByPlaceholderText('Digite o código recebido...');
    fireEvent.changeText(confirmationCodeInput, '123456');

    const confirmButton = getByText('Confirmar e-mail');
    fireEvent.press(confirmButton);
  });

  it('handles resending confirmation code', () => {
    const { getByText } = render(<ConfirmEmail />);
    const resendButton = getByText('Reenviar código');

    fireEvent.press(resendButton);
  });
});
