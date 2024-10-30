import { Injectable } from '@angular/core';
import { IProfessional } from '../interfaces/professional';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  professionals: IProfessional[] = [
    {
      id: 1,
      name: 'Paulo Martins',
      role: 'Odontologia',
      academicBackground: 'Rocha Faria',
      professionalLicense: '123.456-97',
      specialty: 'Limpeza Geral',
      nationalId: '',
      dateOfBirth: new Date(),
      educationLevel: '',
      socialSecurityNumber: '',
      city: '',
      state: '',
      phone: '',
      phone2: '',
      street: '',
      zipCode: '',
      neighborhood: '',
      addressNumber: '',
      additionalAddressInformation: '',
      dateOfHire: '',
      paymentDate: '',
      contractType: '',
      receivingMethod: '',
      paymentInformation: '',
    },
  ];

  constructor() {}

  GetProfessionals(): IProfessional[] {
    return this.professionals;
  }

  CreateProfessinal(professinal: IProfessional): IProfessional {
    professinal.id = this.professionals.length + 1;

    this.professionals.push(professinal);

    return professinal;
  }
}
