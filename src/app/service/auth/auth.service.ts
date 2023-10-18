import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = environment.apiUrl;

  constructor(
    public httpClient: HttpClient,
  ) { }
  login(data: any) {
    return this.httpClient.post(this.baseUrl + `/auth/` + `Login`, data, { responseType: 'text' });
  }
  singup(data: any) {
    return this.httpClient.post(this.baseUrl + `/auth/` +  `createUser`, data, { responseType: 'text' });
  }
}
