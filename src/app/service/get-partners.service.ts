import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {HandleError} from './handleError';
import {PageablePartner} from '../model/pageablePartner';
import {Partner} from '../model/partner';

const baseUrl = 'http://localhost:8080';
const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}) };


@Injectable({
  providedIn: 'root'
})
export class GetPartnersService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPartners(page: number): Observable<PageablePartner> {
    const params = new HttpParams().set('page', `${page}`);
    return this.http.get<PageablePartner>('http://localhost:8080/partner/all', {params: params})
      .pipe(
        catchError(
          HandleError.handleError<PageablePartner>('getPartners')
        )
      );
  }

  deletePartner(partner: Partner): any {
    const url = `${baseUrl}/partner/${partner.id}/delete`;
    return this.http.delete(url, {observe: 'response'})
      .pipe(catchError(HandleError.handleError('deletePartner')));
  }

  getPartner(id: number): Observable<Partner> {
    const url = `${this.baseUrl}/partner/${id}`;
    return this.http.get<Partner>(url).pipe(catchError(HandleError.handleError<Partner>(`getPartner id = ${id}`)));
  }

  createPartner(partner: Partner): Observable<Partner> {
    const url = `${baseUrl}/partner/add`;
    return this.http.post<Partner>(url, JSON.parse(JSON.stringify(partner)), httpOptions)
      .pipe(catchError(HandleError.handleError<Partner>('createPartner')));
  }
}
