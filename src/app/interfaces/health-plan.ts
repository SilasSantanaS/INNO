import { IPayload } from "./payload";

export interface IHealthPlan {
  id: number;
  name: string;
}

export interface IHealthPlans extends IPayload<IHealthPlan> {}
