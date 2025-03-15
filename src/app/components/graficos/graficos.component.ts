import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from "ng-apexcharts";
import { EquipoService } from '../../services/equipo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
};

@Component({
  selector: 'app-graficos',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgApexchartsModule, FormsModule, CommonModule],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};

  filtroAnioUno:number = 0;
  filtroAnioDos:number = 0;
  filtroAnioTres:number = 0;

  hora:string = '';
  fecha:string = '';
  constructor(private equipoService: EquipoService) {
  }

  ngOnInit(): void {

    this.obtenerFechaHora();
    setInterval(() => this.obtenerFechaHora(), 1000);
    this.listadoPorFechaFabricacion();
    this.chartOptions = {
      //series: [this.filtroAnioUno!, this.filtroAnioDos!, this.filtroAnioTres!],
      chart: {
        width: 380,
        type: "pie",
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 1,
          color: '#000',
          opacity: 0.35
        }
      },
      colors: ["#28a745","#ffc107", "#ee4343"
      ],
      labels: ["2023-2025", "2021-2022", "2014-2020"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  obtenerFechaHora():void{
    const hora = new Date().getHours().toString().padStart(2, '0');
    const minuto = new Date().getMinutes().toString().padStart(2, '0');
    const segundos = new Date().getSeconds().toString().padStart(2, '0');
    this.hora = hora+":"+minuto+":"+segundos;

    /*
    const dia = new Date().getDay().toString().padStart(2, '0');
    const mes = new Date().getMonth().toString().padStart(2, '0');
    const año = new Date().getFullYear().toString();

    this.fecha = dia+"/"+mes+"/"+año; */
  }

  listadoPorFechaFabricacion():void{
    //Primero anio
    this.equipoService.listadoEntreFechaDeFabricacion(2014, 2020).subscribe(
      data => {
        this.filtroAnioUno = data.length;
      }
    )
    //Segundo anio
    this.equipoService.listadoEntreFechaDeFabricacion(2021, 2022).subscribe(
      data => {
        this.filtroAnioDos = data.length;
      }
    )
    //Tercer anio
    this.equipoService.listadoEntreFechaDeFabricacion(2023, 2025).subscribe(
      data => {
        this.filtroAnioTres = data.length;
      }
    )


  }

}
