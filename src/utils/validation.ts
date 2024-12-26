import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name must be less than 50 characters'),
  phone: z
    .string()
    .regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  email: z
    .string()
    .email('Invalid email address')
    .optional(), // Optional field
});
