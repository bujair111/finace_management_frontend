import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditServiceService {

  constructor( private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/'

  addCredit(data: any): Observable<any>{

    return this.http.post(this.baseUrl+ 'common/add_credit',data)
    
  }
}
