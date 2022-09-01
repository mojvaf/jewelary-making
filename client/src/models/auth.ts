export interface RegisterRequestBody {
  name: string;
  last: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginRequestBody {
  email: string;
  password: string;
}
export interface RegisterResponseBody {
  token: string;
}
