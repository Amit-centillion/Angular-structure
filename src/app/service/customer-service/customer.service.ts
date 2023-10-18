import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public baseUrl = environment.apiUrl;

  constructor(
    public httpClient: HttpClient,
  ) { }
  getActiveCustomerDashboard() {
    return this.httpClient.get(this.baseUrl + `/dashboard/` + `getDetail`);
  }
  getAllCustomerDetail(search:any){
    return this.httpClient.get(`${this.baseUrl }customer/getAll?search=${search}`);
  }
  getAllLocationData(){
    return this.httpClient.get(this.baseUrl + `location/` + `get`);
  }
  getAllProviderData(){
    return this.httpClient.get(this.baseUrl + `provider/` + `getAll`);
  }
}
