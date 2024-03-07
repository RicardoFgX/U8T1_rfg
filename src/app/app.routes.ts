import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConsultaPaisesComponent } from './consulta-paises/consulta-paises.component';
import { LoginTokenComponent } from './login-token/login-token.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'banderas', component: ConsultaPaisesComponent },
    { path: 'loginToken', component: LoginTokenComponent},
    { path: '', component: HomeComponent},
];
