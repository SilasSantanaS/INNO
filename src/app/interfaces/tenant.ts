import { IPayload } from "./payload";

export interface ITenant {
  id: number;
  name: string;
}

export interface ITenants extends IPayload<ITenant> {}
