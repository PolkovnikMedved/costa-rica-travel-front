import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {Request} from '../model/request';
import {HandleError} from './handleError';

@Injectable({
  providedIn: 'root'
})
export class GetRequestsService {

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>('http://localhost:8080/partner-request/all')
      .pipe(catchError(HandleError.handleError('getRequests', [])));
  }
}
