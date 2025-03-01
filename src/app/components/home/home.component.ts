import { Component } from '@angular/core';
import { UsuarioAsignado } from '../../models/usuario-asignado';
import { Areas } from '../../models/areas';
import { UsuarioAsignadoService } from '../../services/usuario-asignado.service';
import { AreasService } from '../../services/areas.service';
import { GraficosComponent } from "../graficos/graficos.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistoricoAsignacionService } from '../../services/historico-asignacion.service';
import { HistoricoAsignacion } from '../../models/historico-asignacion';
import { HistoricoEquipo } from '../../models/historico-equipo';
import { HistoricoEquipoService } from '../../services/historico-equipo.service';

@Component({
  selector: 'app-home',
  imports: [GraficosComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isModalOpen: boolean = false;

  usuarioAsignado: UsuarioAsignado[] = [];
  areas: Areas[] = [];
  historicoEquipo: HistoricoEquipo[] = [];

  idArea: number = -1;
  historicoAsignacion:HistoricoAsignacion = new HistoricoAsignacion();
  

  constructor(private usuarioAsignadoService: UsuarioAsignadoService, private areasService: AreasService,
              private historicoAsignacionService:HistoricoAsignacionService, 
              private historicoEquipoService:HistoricoEquipoService) {
  }

  ngOnInit(): void {
    this.listadoUsuariosAsignados();
    this.listadoAreas();
  }

  listadoUsuariosAsignados(): void {
    if (this.idArea == -1) {
      this.usuarioAsignadoService.listado().subscribe(
        data => this.usuarioAsignado = data
      )
    } else {
      this.usuarioAsignadoService.listadoPorId(this.idArea).subscribe(
        data => this.usuarioAsignado = data
      )
    }
  }

  listadoAreas(): void {
    this.areasService.listado().subscribe(
      data => {
        this.areas = data
      }
    )
  }

  openModal(idUsuarioAsignado:number) {
    this.isModalOpen = true;

    this.historicoAsignacionService.listadoPorIdUsuarioAsignado(idUsuarioAsignado).subscribe(
      data => {
        if(data!=null){
          this.historicoAsignacion = data
        }

        this.historicoEquipoService.listadoPorIdEquipo(data.idEquipo!).subscribe(
          data => {
            this.historicoEquipo = data;
            console.log(data);
          });
      });
    
  }

  closeModal() {
    this.isModalOpen = false;

    this.historicoAsignacion.idHistorico = undefined;
    this.historicoAsignacion.capacidadAlmacenamiento = '';
    this.historicoAsignacion.fechaFabricacionEquipo = undefined;
    this.historicoAsignacion.fechaIngresoEquipo = undefined;
    this.historicoAsignacion.modeloEquipo = '';
    this.historicoAsignacion.modeloProcesador = '';
    this.historicoAsignacion.nombreMarca = '';
    this.historicoAsignacion.serieEquipo = '';
    this.historicoAsignacion.tamanioMemoriaRam = '';
  }

  closeModalOnOutSideClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('fixed')) {
      this.closeModal();
    }
  }
}
