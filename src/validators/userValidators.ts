import * as yup from 'yup';

export const phoneNumberValidationSchema = yup.object({
  phoneNumber: yup
    .string()
    .trim()
    .required('Please Provide registered Phone Number'),
});

export const signInValidationSchema = yup
  .object({
    password: yup.string().required('Please enter your password.'),
  })
  .concat(phoneNumberValidationSchema);

export const signUpValidationSchema = yup
  .object({
    password: yup.string().required('Please enter your Password.'),
    confirmPassword: yup.string().required('Please Re-Type the Password.'),
  })
  .concat(phoneNumberValidationSchema);
