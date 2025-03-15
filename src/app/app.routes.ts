import { Routes } from '@angular/router';
import { UsuarioAsignado } from './models/usuario-asignado';
import { EquipoAsignadoComponent } from './components/modals/equipo-asignado/equipo-asignado.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoricoEquipoComponent } from './components/gestion/historico-equipo/historico-equipo.component';
import { HistoricoAsignacion } from './models/historico-asignacion/historico-asignacion';
import { HistoricoAsignacionComponent } from './components/gestion/historico-asignacion/historico-asignacion.component';
import { LoginComponent } from './components/security/login/login.component';

export const routes: Routes = [
    {path: 'modal', component: EquipoAsignadoComponent},
    {path: '', component: HomeComponent},
    {path: 'historico-equipo', component: HistoricoEquipoComponent},
    {path: 'historico-asignacion', component: HistoricoAsignacionComponent},
    {path: 'login', component: LoginComponent}
];
