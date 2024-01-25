export type SignIn = {
  email: string;
  password: string;
};
export type SignUp = SignIn & {
  confirmPassword: string;
};

export type ApiResponse = {
  success: boolean;
  message?: string;
};
