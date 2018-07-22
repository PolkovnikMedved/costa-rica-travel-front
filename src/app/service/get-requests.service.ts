import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Request } from '../model/request';
import { HandleError } from './HandleError';

@Injectable({
  providedIn: 'root'
})
export class GetRequestsService {

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>('http://localhost:8080/partner-request/all')
      .pipe(catchError(HandleError.handleError('getRequest', [])));
  }
}
