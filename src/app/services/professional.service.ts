import { Injectable } from '@angular/core';
import { IProfessional } from '../interfaces/professional';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  professionals: IProfessional[] = [
    {
      id: 1,
      name: 'Jorge de Sousa Cabral',
      role: 'Psicólogo',
      academicBackground: 'Universidade Machado de Assis',
      professionalLicense: '123456789',
      specialty: 'Psicologia Clínica',
      nationalId: '30.546.627-6',
      dateOfBirth: new Date(1980, 5, 12),
      educationLevel: 'Pós-Graduação',
      socialSecurityNumber: '254.785.236-01',
      city: 'Rio de Janeiro',
      state: 'RJ',
      phone: '(21) 6658-9581',
      phone2: '(21) 96524-6504',
      street: 'Rua das Flores',
      zipCode: '77823-375',
      neighborhood: 'Centro',
      addressNumber: '34',
      additionalAddressInformation: '2° Quadra',
      dateOfHire: new Date(2010, 3, 15),
      paymentDate: '10/11/2024',
      contractType: 'CLT',
      receivingMethod: 'Cartão',
      paymentInformation:
        'Cartão: Jorge de Sousa Cabral, 4539****3456, 12/27, CVV 123',
    },
    {
      id: 2,
      name: 'Mariana Albuquerque Lima',
      role: 'Fonodiólogo',
      academicBackground: 'Universidade Federal de Minas Gerais',
      professionalLicense: '987654321',
      specialty: 'Nutrição Esportiva',
      nationalId: '25.456.678-9',
      dateOfBirth: new Date(1992, 3, 22),
      educationLevel: 'Graduação',
      socialSecurityNumber: '154.487.963-02',
      city: 'Belo Horizonte',
      state: 'MG',
      phone: '(31) 3245-6789',
      phone2: '(31) 96587-4321',
      street: 'Avenida Central',
      zipCode: '30130-120',
      neighborhood: 'Savassi',
      addressNumber: '120',
      additionalAddressInformation: 'Sala 305',
      dateOfHire: new Date(2018, 7, 10),
      paymentDate: '15/11/2024',
      contractType: 'Autônomo',
      receivingMethod: 'Transferência Bancária',
      paymentInformation: 'Conta: 12345-6, Ag: 4567, Banco do Brasil',
    },
    {
      id: 3,
      name: 'Carlos Eduardo Martins',
      role: 'Terapeuta Ocupacional',
      academicBackground: 'Universidade de São Paulo',
      professionalLicense: '654321987',
      specialty: 'Reabilitação Física',
      nationalId: '45.678.123-4',
      dateOfBirth: new Date(1985, 8, 5),
      educationLevel: 'Mestrado',
      socialSecurityNumber: '321.654.987-00',
      city: 'São Paulo',
      state: 'SP',
      phone: '(11) 98765-4321',
      phone2: '(11) 95432-6789',
      street: 'Rua dos Pinheiros',
      zipCode: '05422-010',
      neighborhood: 'Pinheiros',
      addressNumber: '560',
      additionalAddressInformation: '',
      dateOfHire: new Date(2015, 11, 1),
      paymentDate: '20/11/2024',
      contractType: 'CLT',
      receivingMethod: 'Pix',
      paymentInformation: 'Chave Pix: carlos.martins@gmail.com',
    },
    {
      id: 4,
      name: 'Fernanda da Costa Silva',
      role: 'Terapeuta Ocupacional',
      academicBackground: 'Universidade Estadual do Rio de Janeiro',
      professionalLicense: '112233445',
      specialty: 'Saúde Mental',
      nationalId: '10.234.567-8',
      dateOfBirth: new Date(1990, 10, 25),
      educationLevel: 'Pós-Graduação',
      socialSecurityNumber: '412.356.789-02',
      city: 'Niterói',
      state: 'RJ',
      phone: '(21) 99876-5432',
      phone2: '',
      street: 'Rua do Ouvidor',
      zipCode: '24020-000',
      neighborhood: 'Centro',
      addressNumber: '150',
      additionalAddressInformation: '',
      dateOfHire: new Date(2020, 6, 20),
      paymentDate: '25/11/2024',
      contractType: 'PJ',
      receivingMethod: 'Boleto',
      paymentInformation: 'Boleto: Empresa Saúde RJ, Valor: R$ 4.500,00',
    },
    {
      id: 5,
      name: 'Lucas Pereira Mendes',
      role: 'Pedagogo',
      academicBackground: 'Faculdade de Ciências Médicas de Minas Gerais',
      professionalLicense: '778899001',
      specialty: 'Cardiologia',
      nationalId: '20.345.678-9',
      dateOfBirth: new Date(1978, 4, 30),
      educationLevel: 'Residência Médica',
      socialSecurityNumber: '123.456.789-10',
      city: 'Curitiba',
      state: 'PR',
      phone: '(41) 99988-7766',
      phone2: '(41) 98877-6655',
      street: 'Avenida Brasil',
      zipCode: '80420-040',
      neighborhood: 'Batel',
      addressNumber: '45',
      additionalAddressInformation: 'Apartamento 12',
      dateOfHire: new Date(2012, 9, 5),
      paymentDate: '10/12/2024',
      contractType: 'CLT',
      receivingMethod: 'Transferência Bancária',
      paymentInformation: 'Conta: 65432-1, Ag: 9876, Caixa Econômica',
    },
    {
      id: 6,
      name: 'Patrícia Figueiredo',
      role: 'Fisioterapeuta',
      academicBackground: 'Universidade Católica de Brasília',
      professionalLicense: '998877665',
      specialty: 'Psicologia Infantil',
      nationalId: '33.987.654-1',
      dateOfBirth: new Date(1989, 1, 14),
      educationLevel: 'Graduação',
      socialSecurityNumber: '321.654.987-01',
      city: 'Brasília',
      state: 'DF',
      phone: '(61) 3264-9087',
      phone2: '(61) 99876-5432',
      street: 'Asa Sul',
      zipCode: '70320-040',
      neighborhood: 'Setor Sul',
      addressNumber: '1234',
      additionalAddressInformation: '',
      dateOfHire: new Date(2016, 5, 12),
      paymentDate: '05/12/2024',
      contractType: 'Autônomo',
      receivingMethod: 'Pix',
      paymentInformation: 'Chave Pix: 987f6c32-132b',
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
