import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPaisesService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getPaisesPorContinente(continente: string): Observable<any> {
    const url = `${this.apiUrl}/region/${continente}`;
    return this.http.get(url);
  }
}
