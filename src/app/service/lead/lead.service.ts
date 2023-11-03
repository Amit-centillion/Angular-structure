import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class leadService {
  public baseUrl = 'http://52.206.87.203:81/api';

  constructor(
    public httpClient: HttpClient,
  ) { }
  getAllLeadDetails(data:any){
    return this.httpClient.post(`${this.baseUrl}/Leads/GetAllLeadsDetails`,data,{ responseType: 'text' })
  }
}
