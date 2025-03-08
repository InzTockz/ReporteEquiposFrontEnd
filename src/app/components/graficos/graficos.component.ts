import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from "ng-apexcharts";
import { EquipoService } from '../../services/equipo.service';
import { firstValueFrom } from 'rxjs';

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
  imports: [NgApexchartsModule],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};

  

  constructor(private equipoService:EquipoService) {
  }

  async ngOnInit(): Promise<void> {

    const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
    const series = await Promise.all(years.map(year => this.listadoPorFechaFabricacion(year)));

    this.chartOptions = {
      series: series,
      chart: {
        width: 350,
        type: "pie",
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 2,
          color: '#000',
          opacity: 0.35
        }
      },
      colors: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1",
        "#17a2b8", "#20c997", "#fd7e14", "#e83e8c", "#6610f2",
        "#ff5733", "#33ff57", "#5733ff", "#ff33a8", "#a833ff"
      ],
      labels: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"],
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

  async listadoPorFechaFabricacion(fechaFab:number):Promise<number>{
    const data = await firstValueFrom(this.equipoService.listadoPorFechaDeFabricacion(fechaFab));
    return data.length;
  }

}
