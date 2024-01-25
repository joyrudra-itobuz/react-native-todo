import * as yup from 'yup';

export const emailValidationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required('Please Provide registered email')
    .email(),
});

export const signInValidationSchema = yup
  .object({
    password: yup.string().required('Please enter your password.'),
  })
  .concat(emailValidationSchema);

export const signUpValidationSchema = yup
  .object({
    password: yup.string().required('Please enter your Password.'),
    confirmPassword: yup.string().required('Please Re-Type the Password.'),
  })
  .concat(emailValidationSchema);
