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

  getProfessionalById(id: number): IProfessional {
    return this.professionals.find((el) => el.id === id)!;
  }

  getProfessionals(): IProfessional[] {
    return this.professionals;
  }

  createProfessinal(professinal: IProfessional): IProfessional {
    professinal.id = this.professionals.length + 1;

    this.professionals.push(professinal);

    return professinal;
  }

  deleteProfessinal(id: number): IProfessional[] {
    this.professionals = this.professionals.filter((x) => x.id != id);

    return this.professionals;
  }
}
