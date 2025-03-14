import { InputFieldProps } from '@/types';
import React from 'react';

const InputField = <TFormValues extends Record<string, unknown>>({
  id,
  label,
  placeholder,
  required = false,
  type = 'text',
  error,
  register,
  className,
}: InputFieldProps<TFormValues>) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id as string} className="block text-sm font-medium text-custom-14 text-black">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id as string}
        type={type}
        placeholder={placeholder}
        {...register(id, { required })}
        className={`w-full mt-2 p-3 bg-accent-2 text-black rounded-md outline-none ${error ? 'border border-red-500' : ''
          }`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
