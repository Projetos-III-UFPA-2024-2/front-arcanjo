import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {EntradaComponent} from "./components/entrada/entrada.component";
import {ProjetoDetalheComponent} from "./components/projeto-detalhe/projeto-detalhe.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'entrada', component: EntradaComponent },
  { path: 'projeto-detalhe', component: ProjetoDetalheComponent }
];
