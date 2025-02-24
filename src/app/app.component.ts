import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GraficosComponent } from "./components/graficos/graficos.component";

@Component({
    selector: 'app-root',
    imports: [GraficosComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Hola';

  ngOnInit(): void {
  }
}
