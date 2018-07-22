import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {Type} from '../model/type';
import {HandleError} from './handleError';

@Injectable({
  providedIn: 'root'
})
export class GetTypesService {

  constructor(private http: HttpClient) { }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>('http://localhost:8080/partner-type/all')
      .pipe(catchError(HandleError.handleError('getTypes', [])));
  }
}
