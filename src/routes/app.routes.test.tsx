import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { AppRoutes } from './app.routes';

describe('AppRoutes', () => {
  it('navigates from "login" to "singup"', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );

    const loginButton = getByText('Login');
    fireEvent.press(loginButton);

    const singUpButton = getByText('SingUp');
    expect(singUpButton).toBeTruthy();

    const confirmEmailButton = getByText('ConfirmEmail');
    expect(confirmEmailButton).toBeTruthy();

    const addPhotoButton = getByText('AddPhoto');
    expect(addPhotoButton).toBeTruthy();

    const profileButton = getByText('Profile');
    expect(profileButton).toBeTruthy();
  });
});
