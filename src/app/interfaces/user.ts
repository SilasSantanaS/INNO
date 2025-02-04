import { IPayload } from './payload';

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
}

export interface IUsers extends IPayload<IUser> {}
