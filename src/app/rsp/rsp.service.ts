import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Choice } from '../enum/Choice';
import { RspResult } from '../type/RspResult';
import { RspRequest } from '../type/RspRequest';

@Injectable()
export class RspService {

  constructor(private httpClient: HttpClient) { }

  submitChoice(userChoice: Choice): Observable<RspResult> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const baseUrl = 'http://localhost:8080'

    let rspRequest: RspRequest =  { userChoice: userChoice }
    return this.httpClient.post<RspResult>(baseUrl + '/rsp', rspRequest, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

    // example code -> perhaps optimize later
   handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
