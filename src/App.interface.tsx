export interface ISignInData {
  email: string
  password: string
}

export interface IFormData {
  signIn: ISignInData
  otp: string
}

export const defaultFormValue = {
  signIn: { email: '', password: '' },
  otp: '',
}
