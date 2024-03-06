import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConsultaPaisesComponent } from './consulta-paises/consulta-paises.component';

export const routes: Routes = [
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'banderas', component: ConsultaPaisesComponent },
];
