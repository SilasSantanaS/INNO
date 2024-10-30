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

  dateOfHire: string;
  paymentDate: string;
  contractType: string;
  receivingMethod: string;
  paymentInformation: string;
}
