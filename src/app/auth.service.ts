import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password,
    };

    return this.http.post(this.apiUrl, body);
  }

  loginToken(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No hay token almacenado.');
      return;
    }

    const cabecera = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.http.get('api/ejemplo/u8t3', { headers: cabecera })
      .subscribe(
        response => {
          console.log('Solicitud exitosa:', response);
        },
        error => {
          console.error('Error en la solicitud (Esto probablemente es porque voy a una pagina que no existe):', error);
        }
      );
  }

  loginToken2(): Observable<any> {
    const token = localStorage.getItem('token');

    const cabecera = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get('api/ejemplo/u8t3', { headers: cabecera });
  }
}
