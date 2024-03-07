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

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        //Pilla el token
        console.log(response.token);
        this.token = response.token;

        //Lo guardo en local
        localStorage.setItem('token', this.token);
      },
      (error) => {
        console.error('Error de autenticación:', error);
      }
    );
  }

  pruebaToken(): void {
    this.authService.loginToken();
  }
}
