import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role is Required',
    }),
    name: z.object({
      firstName: z.string({
        required_error: 'firstname is required',
      }),
      lastName: z.string({
        required_error: 'last name is required',
      }),
    }),
    phoneNumber: z.number({
      required_error: 'phone number is required',
    }),
    address: z.string({
      required_error: 'address is required',
    }),
    budget: z.number({
      required_error: 'budget is required',
    }),
    income: z.number({
      required_error: 'income is required',
    }),
  }),
});

export const UserValidation = { createUserZodSchema };
