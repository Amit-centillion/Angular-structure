import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class leadService {
  public baseUrl = 'https://localhost:44334/api/AdditionalDetails';

  constructor(
    public httpClient: HttpClient,
  ) { }
  
}
