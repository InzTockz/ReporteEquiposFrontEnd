import { Component, OnInit } from '@angular/core';
import { HistoricoEquipoService } from '../../../services/historico-equipo.service';
import { UsuarioAsignado } from '../../../models/usuario-asignado';
import { Equipo } from '../../../models/equipo';
import { UsuarioAsignadoService } from '../../../services/usuario-asignado.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EquipoService } from '../../../services/equipo.service';
import { HistoricoEquipoListado } from '../../../models/historico-equipo/historico-equipo-listado';
import { HistoricoEquipo } from '../../../models/historico-equipo/historico-equipo';

@Component({
  selector: 'app-historico-equipo',
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './historico-equipo.component.html',
  styleUrl: './historico-equipo.component.css'
})
export class HistoricoEquipoComponent implements OnInit {

  idUsuarioAsignado!:number;

  historicoEquipo:HistoricoEquipo = new HistoricoEquipo;
  usuarioAsignado:UsuarioAsignado[] = [];
  equipo:Equipo[] = [];
  historicoEquipoListado:HistoricoEquipoListado[] = []

  constructor(private historicoEquipoService:HistoricoEquipoService,
              private usuarioAsignadoService:UsuarioAsignadoService, private equipoService:EquipoService
  ){}

  ngOnInit(): void {
    this.listadoUsuarioAsignado();
    //this.listadoHistorico();
  }

  listadoHistorico():void{
    if(this.historicoEquipo.idEquipo!=null){
      this.historicoEquipoService.listadoPorIdEquipo(this.historicoEquipo.idEquipo!).subscribe(
        data => { 
          this.historicoEquipoListado = data;
        });
    } else {
      this.historicoEquipoListado = [];
    }
    
  }

  listadoUsuarioAsignado():void{
    this.usuarioAsignadoService.listado().subscribe(
      data => { 
        this.usuarioAsignado = data;
      }
    )
  }

  listadoEquiposPorUsuarioAsignado():void{
    if(this.idUsuarioAsignado!=null){
      this.equipoService.listadoPorIdUsuarioAsignado(this.idUsuarioAsignado).subscribe(
        data => {
          this.equipo = data;
        }
      );
    } else {
      this.equipo = [];
    }
  }

  registrarHistorico():void{
    this.historicoEquipoService.registrarEquipo(this.historicoEquipo).subscribe(
      () => {
        this.listadoHistorico();
        window.location.reload();
      }
    )
  }
}
