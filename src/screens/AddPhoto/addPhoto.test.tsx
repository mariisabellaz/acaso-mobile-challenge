import { useNavigation } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { AddPhoto } from './index';

jest.mock('@context/userContext', () => ({
  useUser: () => ({
    userData: { profile_picture: 'some_image_url' }, // Dados do usuário mockados
    savePhoto: jest.fn(),
    fechUser: jest.fn(),
  }),
}));

jest.mock('@hooks/useImagePicker', () => ({
  useImagePicker: () => ({
    imageUri: 'image_uri_mock', // Uri da imagem mockada
    pickImage: jest.fn(),
  }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('AddPhoto', () => {
  it('renders without errors', () => {
    render(<AddPhoto />);
  });

  it('navigates to "profile" screen when user has a profile picture', () => {
    const navigateMock = jest.fn();
    (useNavigation as any).mockReturnValue({ navigate: navigateMock });

    const { getByText } = render(<AddPhoto />);
    const continueButton = getByText('Continuar');
    fireEvent.press(continueButton);
  });

  it('calls savePhoto when user does not have a profile picture', () => {
    const navigateMock = jest.fn();
    (useNavigation as any).mockReturnValue({ navigate: navigateMock });

    const { getByText } = render(<AddPhoto />);
    const continueButton = getByText('Continuar');
    fireEvent.press(continueButton);
  });

  it('calls pickImage when "Escolher foto" button is pressed', () => {
    const { getByText } = render(<AddPhoto />);
    const choosePhotoButton = getByText('Escolher foto');
    fireEvent.press(choosePhotoButton);
  });
});
