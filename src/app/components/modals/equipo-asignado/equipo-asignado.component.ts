import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-equipo-asignado',
  imports: [CommonModule],
  templateUrl: './equipo-asignado.component.html',
  styleUrl: './equipo-asignado.component.css'
})
export class EquipoAsignadoComponent {

  isModalOpen!:boolean;

  openModal(){
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }

  closeModalOnOutSideClick(event:MouseEvent){
    const targetElement = event.target as HTMLElement;
    if(targetElement.classList.contains('fixed')){
      this.closeModal();
    }
  }
}
