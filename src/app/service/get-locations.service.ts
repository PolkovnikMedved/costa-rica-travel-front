import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HandleError} from './handleError';

import {Location} from '../model/location';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}) };
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

  getLocation(id: number): Observable<Location> {
    const url = `${baseUrl}/location/${id}`;
    return this.http.get<Location>(url)
      .pipe(catchError(HandleError.handleError<Location>(`getLocation with id = ${id}`)));
  }

  createLocation(location: Location): Observable<Location> {
    const url = `${baseUrl}/location/add`;
    return this.http.post<Location>(url, location, httpOptions)
      .pipe(catchError(HandleError.handleError<Location>('addLocation')));
  }

  updateLocation(location: Location): Observable<any> {
    const url = `${baseUrl}/location/update`;
    return this.http.put(url, location, httpOptions)
      .pipe(catchError(HandleError.handleError('updateLocation')));
  }

  deleteLocation(location: Location): any {
    const url = `${baseUrl}/location/${location.id}/delete`;
    return this.http.delete(url, {observe: 'response'})
      .pipe(catchError(HandleError.handleError('deleteLocation')));
  }
}
