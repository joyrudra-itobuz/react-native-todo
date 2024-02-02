import * as yup from 'yup';

export const noteValidationSchema = yup.object({
  title: yup.string().required(),
  body: yup.string().required(),
  isImportant: yup.boolean().optional(),
  isFinished: yup.boolean().optional(),
  tags: yup.array().optional(),
});
