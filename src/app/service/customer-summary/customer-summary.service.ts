import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerSummaryService {
  public baseUrl = environment.apiUrl;

  constructor(
    public httpClient: HttpClient,
  ) { }
  getAllCustomerDetail(search:any){
    return this.httpClient.get(`${this.baseUrl }customer/getAll?search=${search}`);
  }
  getCustomerServiceDetail(search:any){
    return this.httpClient.get(`${this.baseUrl}planService/customerDashboard?customerId=${search}`)
  }
}
