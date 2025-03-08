import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricoEquipoListado } from '../models/historico-equipo/historico-equipo-listado';
import { HistoricoEquipo } from '../models/historico-equipo/historico-equipo';

@Injectable({
  providedIn: 'root'
})
export class HistoricoEquipoService {

  private apiHistoricoEquipo:string = 'http://localhost:8080/api/hstorico-equipo';

  constructor(private http:HttpClient) { }

  listado():Observable<HistoricoEquipoListado[]>{
    return this.http.get<HistoricoEquipoListado[]>(`${this.apiHistoricoEquipo}/listado`);
  }

  registrarEquipo(historicoEquipo:HistoricoEquipo):Observable<HistoricoEquipo>{
    return this.http.post<HistoricoEquipo>(`${this.apiHistoricoEquipo}/registrar`, historicoEquipo);
  }

  listadoPorIdEquipo(idEquipo:number):Observable<HistoricoEquipo[]>{
    return this.http.get<HistoricoEquipo[]>(`${this.apiHistoricoEquipo}/listado/${idEquipo}`);
  }
}
