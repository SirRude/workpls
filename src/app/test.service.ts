import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Firms} from './firms'





const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}; 

@Injectable()

export class TestService {
  endpoint = 'http://localhost:29576/api/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 

  getFirms():Observable<any> {
    return this.http.get('http://localhost:29576/api/firms').pipe(
      retry(1), catchError(this.handleError)
    )
  }

  getContacts():Observable<any> {
    return this.http.get('http://localhost:29576/api/Contacts').pipe(
      retry(1), catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    var throwError;
    window.alert(errorMessage);
    return errorMessage;
 }

}

//hjælp til koden fra https://www.positronx.io/angular-7-httpclient-http-service/ både her og i database component