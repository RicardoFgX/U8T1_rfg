import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-token',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-token.component.html',
  styleUrl: './login-token.component.css'
})
export class LoginTokenComponent {
  email: string = '';
  password: string = '';
  token: string = '';
  pista: string = 'eve.holt@reqres.in'

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (resp) => {
        // Pilla el token
        console.log(resp.token);
        this.token = resp.token;

        // Lo guardo en local
        localStorage.setItem('token', this.token);
      },
      error: (error) => {
        console.error('Error de autenticación:', error);
        /*
        Swal.fire([
          title: "Error en la peticion"
          text: "No hemos podido conectar"
          icon: "error"
        ])
        */
      },
      complete: () => {
        console.log('He terminado la petición')
      }
    });
  }


  pruebaToken(): void {
    this.authService.loginToken();
  }

  pruebaToken2(): void {
    this.authService.loginToken2().subscribe({
      next: (resp) => {
        console.log('Solicitud exitosa:', resp);
      },
      error: (error) => {
        console.error('Error en la solicitud (Esto probablemente es porque voy a una pagina que no existe):', error);
      },
      complete: () => {
        console.log('He terminado la petición')
      }
    });
  }
}
