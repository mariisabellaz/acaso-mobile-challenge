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
  formState: any;
  required?: boolean;
};

type FormProps = Partial<CommonInputProps> & TextInputProps;

export const Form = ({
  caption,
  name,
  control,
  required = true,
  placeholder,
  formState,
  error,
  ...rest
}: FormProps) => {
  const hasError = formState.errors[name] || formState.isSubmitted;

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
          // hasError={hasError}
          error={error}
          {...rest}
        />
      )}
      name={name}
    />
  );
};
