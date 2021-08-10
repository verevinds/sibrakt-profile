export type SignUpRequest = { phone: string; password: string };
export type SignInRequest = SignUpRequest;
export type ChangePasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
