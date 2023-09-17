import React from 'react';
import { Controller } from 'react-hook-form';

import { CommonInput } from '@components/molecules/CommonInput';

type FormProps = {
  caption: string;
  name: any;
  placeholder: string;
  error?: string;
  control: any;
  formState: any;
  required?: boolean;
};

export const Form = ({
  caption,
  name,
  control,
  required = true,
  placeholder,
  formState,
  error,
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
          hasError={hasError}
          error={error}
        />
      )}
      name={name}
      rules={{ required }}
    />
  );
};
