import * as yup from 'yup';

export const emailValidationSchema = yup.object({
  phoneNumber: yup
    .string()
    .trim()
    .required('Please Provide registered Phone Number'),
});

export const signInValidationSchema = yup
  .object({
    password: yup.string().required('Please enter your password.'),
  })
  .concat(emailValidationSchema);
