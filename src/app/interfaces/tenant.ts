import { Tier } from '../enums/tier';
import { IPayload } from './payload';

export interface ITenant {
  id: number;
  name: string;
  pricingTierId: Tier;
  corporateName: string;
  inactivatedAt: string;
}

export interface ITenants extends IPayload<ITenant> {}
