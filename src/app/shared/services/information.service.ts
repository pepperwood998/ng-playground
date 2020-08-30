import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Information } from '#models/information.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor(private http: HttpClient) {}

  getInformation(id: number): Observable<Information> {
    return this.http
      .get<Information>(`http://localhost:3001/informations/${id}`)
      .pipe(catchError(this.handleError<Information>(new Information())));
  }

  handleError<T>(result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
