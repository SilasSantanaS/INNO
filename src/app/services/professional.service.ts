import { Injectable } from '@angular/core';
import { Professional } from '../interfaces/professional';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  professionals: Professional[] = [
    {
      id: 1,
      name: 'Paulo Martins',
      type: 'Ginecologista',
      unit: 'Rocha Faria',
      status: 'Ativo',
    },
    {
      id: 2,
      name: 'Luciana Almeida',
      type: 'Neurologista',
      unit: 'Monte Sinai',
      status: 'Ativo',
    },
    {
      id: 3,
      name: 'Carlos Costa',
      type: 'Neurologista',
      unit: 'São Lucas',
      status: 'Ativo',
    },
    {
      id: 4,
      name: 'Luciana Martins',
      type: 'Neurologista',
      unit: 'Santa Casa',
      status: 'Inativo',
    },
    {
      id: 5,
      name: 'Maria Almeida',
      type: 'Urologista',
      unit: 'Santa Casa',
      status: 'Inativo',
    },
    {
      id: 6,
      name: 'Maria Martins',
      type: 'Ortopedista',
      unit: 'Rocha Faria',
      status: 'Inativo',
    },
    {
      id: 7,
      name: 'Fernando Gonçalves',
      type: 'Cardiologista',
      unit: 'São Lucas',
      status: 'Ativo',
    },
    {
      id: 8,
      name: 'Juliana Gonçalves',
      type: 'Ginecologista',
      unit: 'Rocha Faria',
      status: 'Ativo',
    },
    {
      id: 9,
      name: 'Fernando Pereira',
      type: 'Clínico Geral',
      unit: 'Monte Sinai',
      status: 'Inativo',
    },
    {
      id: 10,
      name: 'Renata Martins',
      type: 'Ortopedista',
      unit: 'Monte Sinai',
      status: 'Inativo',
    },
  ];

  constructor() {}

  GetProfessionals(): Professional[] {
    return this.professionals;
  }
}
