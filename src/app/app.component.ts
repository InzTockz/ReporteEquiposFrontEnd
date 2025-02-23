import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Hola';

  ngOnInit(): void {
  }
}
