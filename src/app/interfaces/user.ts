import { IPayload } from './payload';

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
}

export interface IUsers extends IPayload<IUser> {}
