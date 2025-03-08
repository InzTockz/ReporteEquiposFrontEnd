import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GraficosComponent } from "./components/graficos/graficos.component";
import { UsuarioAsignado } from './models/usuario-asignado';
import { UsuarioAsignadoService } from './services/usuario-asignado.service';
import { CommonModule, NgForOf } from '@angular/common';
import { AreasService } from './services/areas.service';
import { Areas } from './models/areas';
import { FormsModule } from '@angular/forms';
import { EquipoAsignadoComponent } from "./components/modals/equipo-asignado/equipo-asignado.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
