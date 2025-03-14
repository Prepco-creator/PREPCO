'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from './InputField';
import { contactFormSchema } from '@/utils/validation';
import { toast } from 'react-toastify';

type FormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form-submission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        toast.success("Form Submitted Successfully")
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
