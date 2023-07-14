import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommenServiceService {

  constructor( private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/'

  showCardData(): Observable<any> {
    return this.http.get(this.baseUrl + 'common/card_detail');
  }

  totalIncome(): Observable<any> {
    return this.http.get(this.baseUrl + 'common/total_income');
  }

  totalExpense(): Observable<any> {
    return this.http.get(this.baseUrl + 'common/total_expense');
  }

  listExpense(): Observable<any> {
    return this.http.get(this.baseUrl + 'common/list_expense');
  }

  listIncome(): Observable<any> {
    return this.http.get(this.baseUrl + 'common/list_income');
  }
  
}
