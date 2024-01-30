export type Profile = {
  username: string;
  userType: string;
  name: string;
  email: string;
  phoneNumber: string;
  id: string;
};

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

export type LoginResponse = ApiResponse & {
  data: {
    userDetails: Profile;
    accessToken: string;
    refreshToken: string;
  };
};
