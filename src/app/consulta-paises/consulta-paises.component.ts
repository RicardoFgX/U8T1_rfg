import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultaPaisesService } from '../consultapaises.service';

@Component({
  selector: 'app-consulta-paises',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta-paises.component.html',
  styleUrl: './consulta-paises.component.css'
})
export class ConsultaPaisesComponent {
  continenteSeleccionado: any;
  paises: any[] = [];

  constructor(private consultapaisesService: ConsultaPaisesService) {}

  obtenerPaisesPorContinente() {
    this.consultapaisesService
      .getPaisesPorContinente(this.continenteSeleccionado)
      .subscribe((data: any) => {
        this.paises = data;
      });
  }
}
