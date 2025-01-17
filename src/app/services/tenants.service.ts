import { Injectable } from '@angular/core';
import { ITenant, ITenants } from '../interfaces/tenant';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface IGetTenantsParams {
  search?: string;
  tenantId?: number;
  page?: number;
  pageLimit?: number;
}

@Injectable({
  providedIn: 'root',
})
export class TenantsService {
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private readonly _http: HttpClient) {}

  getTenants(queryParams?: IGetTenantsParams) {
    let result = this._http.get<ITenants>(`${this.baseUrl}/tenants`, {
      params: queryParams as HttpParams,
    });

    result.subscribe((data) => {
      console.log(data);
    });

    return result;
  }

  getTenant(id: ITenant['id']) {
    return this._http.get<ITenant>(`tenants/${id}`);
  }

  newTenant(tenant: ITenant) {
    return this._http.post<ITenant>('tenants', tenant);
  }

  editTenant(id: ITenant['id'], tenant: ITenant) {
    return this._http.put<ITenant>(`tenants/${id}`, tenant);
  }

  deleteTenant(id: ITenant['id']) {
    return this._http.delete<ITenant>(`tenants/${id}`);
  }
}
