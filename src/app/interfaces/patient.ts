import { IPayload } from './payload';

export interface IPatient {
  id: number;
}

export interface IPatients extends IPayload<IPatient> {}
