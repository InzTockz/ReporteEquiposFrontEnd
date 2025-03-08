import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiEquipo:string = 'http://localhost:8080/api/equipos';

  constructor(private http:HttpClient) { }

  listado():Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${this.apiEquipo}/listado`);
  }

  listadoPorDisponibilidad():Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${this.apiEquipo}/listadoPorDisponibilidad`);
  }
  listadoPorIdEquipo(idEquipo:number):Observable<Equipo>{
    return this.http.get<Equipo>(`${this.apiEquipo}/buscarPorIdEquipo/${idEquipo}`);
  }

  listadoPorIdUsuarioAsignado(idUsuarioAsignado:number):Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${this.apiEquipo}/listadoPorIdUsuarioAsignado/${idUsuarioAsignado}`);
  }

  listadoPorFechaDeFabricacion(fechaFab:number):Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${this.apiEquipo}/listadoPorFechaDeFabricacion/${fechaFab}`);
  }
}
