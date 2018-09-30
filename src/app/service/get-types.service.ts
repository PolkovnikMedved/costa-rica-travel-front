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

  uploadFile(file, type): Observable<Type> {
    const uploadFile = new FormData();
    uploadFile.append('file', file, file.name);
    uploadFile.append('partner-type', JSON.stringify(type));
    return this.http.post<Type>('http://localhost:8080/partner-type/add', uploadFile)
      .pipe(catchError(HandleError.handleErrorResponse));
  }
}
