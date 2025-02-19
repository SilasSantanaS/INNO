import { Observable, map } from 'rxjs';
import { ICity } from '../interfaces/city';
import { Injectable } from '@angular/core';
import { IState } from '../interfaces/state';
import { IViaCep } from '../interfaces/viacep';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private IBGE_API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades';

  constructor(private http: HttpClient) {}

  getAddressByZipCode(zipcode: string): Observable<IViaCep> {
    const headers = new HttpHeaders({ skipInterceptor: 'true' });

    return this.http.get<IViaCep>(`https://viacep.com.br/ws/${zipcode}/json/`, {
      headers,
    });
  }

  listStates(): Observable<IState[]> {
    const headers = new HttpHeaders({ skipInterceptor: 'true' });

    return this.http
      .get<IState[]>(`${this.IBGE_API_URL}/estados`, { headers })
      .pipe(
        map((states: IState[]) =>
          states.sort((a, b) => a.nome.localeCompare(b.nome))
        )
      );
  }

  listCities(uf: string): Observable<ICity[]> {
    const headers = new HttpHeaders({ skipInterceptor: 'true' });

    return this.http
      .get<ICity[]>(`${this.IBGE_API_URL}/estados/${uf}/municipios`, {
        headers,
      })
      .pipe(
        map((states: ICity[]) =>
          states.sort((a, b) => a.nome.localeCompare(b.nome))
        )
      );
  }
}
