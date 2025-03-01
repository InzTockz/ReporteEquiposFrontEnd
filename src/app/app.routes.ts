import { Routes } from '@angular/router';
import { UsuarioAsignado } from './models/usuario-asignado';
import { EquipoAsignadoComponent } from './components/modals/equipo-asignado/equipo-asignado.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'modal', component: EquipoAsignadoComponent},
    {path: '', component: HomeComponent}
];
