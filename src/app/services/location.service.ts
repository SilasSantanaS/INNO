import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { IState } from '../interfaces/state';
import { IViaCep } from '../interfaces/viacep';
import { HttpClient } from '@angular/common/http';
import { ICity } from '../interfaces/city';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private IBGE_API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades';

  constructor(private http: HttpClient) {}

  getAddressByZipCode(zipcode: string): Observable<IViaCep> {
    return this.http.get<IViaCep>(`https://viacep.com.br/ws/${zipcode}/json/`);
  }

  listStates(): Observable<IState[]> {
    return this.http
      .get<IState[]>(`${this.IBGE_API_URL}/estados`)
      .pipe(
        map((states: IState[]) =>
          states.sort((a, b) => a.nome.localeCompare(b.nome))
        )
      );
  }

  listCities(uf: string): Observable<ICity[]> {
    return this.http
      .get<ICity[]>(`${this.IBGE_API_URL}/estados/${uf}/municipios`)
      .pipe(
        map((states: ICity[]) =>
          states.sort((a, b) => a.nome.localeCompare(b.nome))
        )
      );
  }
}
