export interface ILogin {
  email: string;
  password: string;
}
export interface ISignUp {
  email: string;
  password: string;
  nickname: string;
}
export interface ISignUpForm extends ISignUp {
  confirmPassword: string;
  emailCode: number;
}

export interface ICheckEmail {
  email: string;
}

export interface ICheckEmailCode {
  emailCode: number;
}

export interface ICheckNickname {
  nickname: string;
}

export interface IUser {
  id: number;
  email: string;
  nickname: string;
  avatarImg: string | null;
  totalTime: number;
  score: number;
  targetTime: number;
}
