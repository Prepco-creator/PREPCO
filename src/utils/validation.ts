import { z } from 'zod';

export const contactFormSchema = z.object({
  Name_First: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name must be less than 50 characters'),
  Name_Last: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name must be less than 50 characters'),
  PhoneNumber_countrycode: z
    .string()
    .regex(/^\d{10}$/, 'Phone number must be 10 digits'),
    Email: z
    .string()
    .email('Invalid email address')
    .optional(), // Optional field
});
