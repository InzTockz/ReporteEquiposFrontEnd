import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  validate:string = 'open';

  constructor(private router:Router){}

  ngOnInit(): void {
    
  }

  login():void{
    this.router.navigate(['login']);
    //this.validate = false;
  }
}
