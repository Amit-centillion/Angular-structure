import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  public baseUrl = environment.apiUrl;

  constructor(
    public httpClient: HttpClient,
  ) { }
  providerSummary() {
    return this.httpClient.get(this.baseUrl + `/provider/` + `providerSummary`);
  }
}
