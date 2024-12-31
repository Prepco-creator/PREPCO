'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from './InputField';
import { contactFormSchema } from '@/utils/validation';

type FormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Form Inputs */}
      <InputField
        id="name"
        label="Name"
        placeholder="Your Name"
        required={true}
        register={register}
        error={errors.name?.message}
      />
      <InputField
        id="phone"
        label="Phone Number"
        placeholder="Phone Number"
        required={true}
        register={register}
        error={errors.phone?.message}
      />
      <InputField
        id="email"
        label="Email Address"
        placeholder="Email Address (Optional)"
        register={register}
        error={errors.email?.message}
      />

      <button
        type="submit"
        className="w-full py-3 px-6 bg-custom-gradient shadow-double-inset text-white font-semibold text-lg custom-border-radius hover:bg-none hover:text-primary hover:shadow-none border-primary border-[2px] transition-all duration-300 ease-in-out"
      >
        Send a Message
      </button>
    </form>
  );
};

export default ContactForm;
