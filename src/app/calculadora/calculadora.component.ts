import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  resultado: any;
  numero1: any;
  numero2: any;

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }

  restar(): void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
  }
}

