import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Profile } from './index';

jest.mock('@context/authContext', () => ({
  useAuth: () => ({ signOut: jest.fn() }),
}));

jest.mock('@context/userContext', () => ({
  useUser: () => ({
    userData: {
      first_name: 'João ',
      last_name: 'Carlos',
      last_access_at: '2023-09-18T16:28:52.954Z',
      profile_picture: 'https://www.idrlabs.com/misc_pictures/star-wars-pathology-card.png',
    },
  }),
}));

describe('Profile', () => {
  it('renders without errors', () => {
    render(<Profile />);
  });

  it('displays user data correctly', () => {
    const { getByText } = render(<Profile />);
    expect(getByText('João')).toBeTruthy();
    expect(getByText('CARLOS')).toBeTruthy();
    expect(getByText('Ativo')).toBeTruthy();
    expect(getByText('2023-09-18T16:28:52.954Z')).toBeTruthy();
  });

  it('calls signOut when "Sair de aca.so" button is pressed', () => {
    const { getByText } = render(<Profile />);
    const signOutButton = getByText('Sair de aca.so');

    fireEvent.press(signOutButton);
  });
});
