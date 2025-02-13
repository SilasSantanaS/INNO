import { IUser } from "./user";

export interface IAuth {
  user?: IUser | null;
	rememberMe?: boolean;
	isAuthenticated?: boolean;
}
