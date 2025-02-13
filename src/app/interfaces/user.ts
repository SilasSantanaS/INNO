import { IPayload } from './payload';

export interface ITokens {
  token?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  refreshTokenExpiresAt?: Date | null;
}

export interface IUser extends ITokens {
  id: number;
  fullName: string;
  email: string;
  password: string;
  tenantId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUsers extends IPayload<IUser> {}
