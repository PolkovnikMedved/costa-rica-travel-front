import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {HandleError} from './handleError';
import {PageablePartner} from '../model/pageablePartner';

@Injectable({
  providedIn: 'root'
})
export class GetPartnersService {

  constructor(private http: HttpClient) { }

  getPartners(): Observable<PageablePartner> {

    const params = new HttpParams().set('page', '5');

    return this.http.get<PageablePartner>('http://localhost:8080/partner/all', {params: params})
      .pipe(
        catchError(
          HandleError.handleError<PageablePartner>('getPartners')
        )
      );
  }
}
