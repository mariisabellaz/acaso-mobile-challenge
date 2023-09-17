import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { CommonInput } from '@components/molecules/CommonInput';

type CommonInputProps = {
  caption: string;
  name: any;
  placeholder: string;
  error?: string;
  control: any;
};

type FormProps = Partial<CommonInputProps> & TextInputProps;

export const Form = ({ caption, name, control, placeholder, error, ...rest }: FormProps) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <CommonInput
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          caption={caption}
          error={error}
          isPassword={name === 'password' || name === 'confirm_password'}
          {...rest}
        />
      )}
      name={name}
    />
  );
};
