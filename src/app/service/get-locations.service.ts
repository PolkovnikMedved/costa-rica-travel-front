import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {HandleError} from './handleError';

import {Location} from '../model/location';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class GetLocationsService {

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    const url = `${baseUrl}/location/all`;
    return this.http.get<Location[]>(url)
      .pipe(
        catchError(HandleError.handleError('getLocations', [])));
  }

  createLocation(location: Location): Observable<Location> {
    const url = `${baseUrl}/location/add`;
    return this.http.post<Location>(url, location, httpOptions)
      .pipe(catchError(HandleError.handleError<Location>('addLocation')));
  }

  deleteLocation(location: Location): void {
    const url = `${baseUrl}/${location.id}/delete`;
    this.http.delete(url)
      .pipe(catchError(HandleError.handleError('deleteLocation', [])));
  }
}
