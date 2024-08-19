const { z, number } = require('zod');

const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

module.exports = { registerSchema, loginSchema };


