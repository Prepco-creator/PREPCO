'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from './InputField';
import { contactFormSchema } from '@/utils/validation';

type FormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  // const onSubmit = async (data: FormValues) => {
  //   try {
  //     const formData = new URLSearchParams();
  //     formData.append("Name_First", data.firstname);
  //     formData.append("Name_Last", data.lastname);
  //     formData.append("PhoneNumber_countrycode", data.phone);
  //     formData.append("Email", data.email || ""); // Optional field

  //     const response = await fetch(
  //       "https://forms.zohopublic.in/gopuprepcohe1/form/Contactform/formperma/eosjBLGjpAAtqHlrppfZZdfw5YuMI2psqoBee5l8wK4/htmlRecords/submit",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         body: formData.toString(),
  //       }
  //     );

  //     if (response.ok) {
  //       toast.success("Form Submitted Successfully");
  //     } else {
  //       toast.error("Failed to submit form");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toast.error("An error occurred. Please try again.");
  //   }
  // };


  return (
<form action='https://forms.zohopublic.in/gopuprepcohe1/form/Contactform/formperma/eosjBLGjpAAtqHlrppfZZdfw5YuMI2psqoBee5l8wK4/htmlRecords/submit' name='form' id='form' method='POST' className='space-y-9' acceptCharset='UTF-8' encType='multipart/form-data'>
      <div className='flex w-full flex-col md:flex-row justify-between gap-4'>
        <InputField
          id="Name_First"
          label="Name"
          placeholder="Your Name"
          required={true}
          register={register}
          error={errors.Name_First?.message}
          className="flex-1"
        />
        <InputField
          id="Name_Last"
          label="Name"
          placeholder="Your Name"
          required={true}
          register={register}
          error={errors.Name_Last?.message}
          className='flex-1'
        />
      </div>

      <InputField
        id="PhoneNumber_countrycode"
        label="Phone Number"
        placeholder="Phone Number"
        required={true}
        register={register}
        error={errors.PhoneNumber_countrycode?.message}
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
