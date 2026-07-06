import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Email is required.'),

  password: yup
    .string()
    .min(6, 'Password must contain at least 6 characters.')
    .required('Password is required.'),
});

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required('Full name is required.'),

  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Email is required.'),

  password: yup
    .string()
    .min(8, 'Password must contain at least 8 characters.')
    .required('Password is required.'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match.')
    .required('Please confirm your password.'),
});