export type SignIn = {
  phoneNumber: string;
  password: string;
};
export type SignUp = SignIn & {
  confirmPassword: string;
};
