import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {Type} from '../model/type';
import {HandleError} from './handleError';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}) };
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class GetTypesService {

  constructor(private http: HttpClient) { }

  getTypes(): Observable<Type[]> {
    const url = `${baseUrl}/partner-type/all`;
    return this.http.get<Type[]>(url)
      .pipe(catchError(HandleError.handleError('getTypes', [])));
  }

  uploadFile(file, type): Observable<Type> {
    const url = `${baseUrl}/partner-type/add`;
    const uploadFile = new FormData();
    uploadFile.append('file', file, file.name);
    uploadFile.append('partner-type', JSON.stringify(type));
    return this.http.post<Type>(url, uploadFile)
      .pipe(catchError(HandleError.handleErrorResponse));
  }

  getType(id: number): Observable<Type> {
    const url = `${baseUrl}/partner-type/${id}`;
    return this.http.get<Type>(url)
      .pipe(catchError(HandleError.handleError<Type>(`get partner type with id = ${id}`)));
  }

  updateType(type: Type): Observable<any> {
    const url = `${baseUrl}/partner-type/update`;
    return this.http.put(url, type, httpOptions)
      .pipe(catchError(HandleError.handleError<Type>('updatePartnerType')));
  }

  deleteType(type: Type): any {
    const url = `${baseUrl}/partner-type/${type.id}/delete`;
    return this.http.delete(url, {observe: 'response'})
      .pipe(catchError(HandleError.handleErrorResponse));
  }
}
