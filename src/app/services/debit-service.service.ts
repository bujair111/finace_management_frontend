import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebitServiceService {

  constructor( private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/'

  addDebit(data: any): Observable<any>{

    return this.http.post(this.baseUrl+ 'common/add_debit',data)
    
  }
}
