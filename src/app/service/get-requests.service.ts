import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {Request} from '../model/request';
import {HandleError} from './handleError';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class GetRequestsService {

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    const url = `${baseUrl}/partner-request/all`;
    return this.http.get<Request[]>(url)
      .pipe(catchError(HandleError.handleError('getRequests', [])));
  }

  createRequest(request: Request): Observable<Request> {
    const url = `${baseUrl}/partner-request/add`;
    return this.http.post<Request>(url, request, httpOptions)
      .pipe(catchError(HandleError.handleError<Request>('createRequest')));
  }
}
