export interface IProfessional {
  id: number;
  name: string;
  role: string;
  specialty: string;
  nationalId: string;
  dateOfBirth: Date;
  educationLevel: string;
  academicBackground: string;
  professionalLicense: string;
  socialSecurityNumber: string;

  city: string;
  state: string;
  phone: string;
  phone2: string;
  street: string;
  zipCode: string;
  neighborhood: string;
  addressNumber: string;
  additionalAddressInformation: string;

  dateOfHire: Date;
  paymentDate: string;
  contractType: string;
  receivingMethod: string;
  paymentInformation: string;
}

export enum ReceivingMethod {
  Hourly,
  Daily,
  Monthly
}

export enum ContractType {
  CNPJ,
  CLT,
  RPA,
  FreeLancer,
}

export enum EducationLevel {
  BasicCompleted,
  BasicUncompleted,
  HighSchoolCompleted,
  HighSchoolUncompleted,
  CollegeCompleted,
  CollegeUncompleted,
  MastersCompleted,
  MastersUncompleted,
}

export enum Role {
  Psychologist,
  SpeechTherapist,
  OccupationalTherapist,
  Pedagogue,
  Physiotherapist,
  TherapeuticCompanion,
  Psychomotrician,
  Psychiatrist,
  Others,
}
