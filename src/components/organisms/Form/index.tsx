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
  console.tron.log('ERROR', error);
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
          {...rest}
        />
      )}
      name={name}
    />
  );
};
