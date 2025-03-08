import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HistoricoAsignacionService } from '../../../services/historico-asignacion.service';
import { HistoricoAsignacionListado } from '../../../models/historico-asignacion/historico-asignacion-listado';
import { CommonModule } from '@angular/common';
import { UsuarioAsignadoService } from '../../../services/usuario-asignado.service';
import { UsuarioAsignado } from '../../../models/usuario-asignado';
import { EquipoService } from '../../../services/equipo.service';
import { Equipo } from '../../../models/equipo';
import { HistoricoAsignacion } from '../../../models/historico-asignacion/historico-asignacion';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-historico-asignacion',
  imports: [NgSelectModule, FormsModule, CommonModule],
  templateUrl: './historico-asignacion.component.html',
  styleUrl: './historico-asignacion.component.css'
})
export class HistoricoAsignacionComponent implements OnInit {

  idUsuarioAsignado!: number;
  //idEquipo!: number;
  serieEquipo?: string;
  equipo: Equipo[] = [];
  usuarioAsignado: UsuarioAsignado[] = [];
  HistoricoAsignacionListado: HistoricoAsignacionListado[] = [];
  historicoAsignacion: HistoricoAsignacion = new HistoricoAsignacion;

  constructor(private historicoAsignacionService: HistoricoAsignacionService,
    private usuarioAsignadoService: UsuarioAsignadoService,
    private equipoService: EquipoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listado();
    this.listadoUsuariosAsignados();
    this.listadoEquipo();
  }

  listado(): void {
    this.historicoAsignacionService.listado().subscribe(
      data => {
        this.HistoricoAsignacionListado = data
      }
    )
  }

  listadoUsuariosAsignados(): void {
    this.usuarioAsignadoService.listadoPorDisponibilidad().subscribe(
      data => {
        this.usuarioAsignado = data;
      }
    )
  }

  listadoEquipo(): void {
    this.equipoService.listadoPorDisponibilidad().subscribe(
      data => {
        this.equipo = data;
      }
    )
  }

  listadoEquipoPorId(): void {
    if (this.historicoAsignacion.idEquipo != null) {
      this.equipoService.listadoPorIdEquipo(this.historicoAsignacion.idEquipo).subscribe(
        data => {
          this.serieEquipo = data.serieEquipo!;
        }
      )
    } else {
      this.serieEquipo = undefined;
    }
  }

  registrarAsignacion(): void {
    //Registrando la entidad al servicio y suscribiendola.
    this.historicoAsignacionService.registrar(this.historicoAsignacion).subscribe(
      () => {
        Swal.fire({
          title: 'Se asigno de manera correcta',
          icon: 'success'
        })
        this.listado();
        this.listadoUsuariosAsignados();
        this.listadoEquipo();
        //this.limpiarTexto();
        this.historicoAsignacion = new HistoricoAsignacion();
        this.serieEquipo = undefined;
      }
    )
  }

  limpiarTexto(): void {
    this.historicoAsignacion.idHistorico = undefined;
    this.historicoAsignacion.detalleHistorico = undefined;
    this.historicoAsignacion.estadoHistorico = undefined;
    this.historicoAsignacion.fechaHistorico = undefined;
    this.historicoAsignacion.idEquipo = undefined;
    this.historicoAsignacion.idUsuarioAsignado = undefined;
  }
}
