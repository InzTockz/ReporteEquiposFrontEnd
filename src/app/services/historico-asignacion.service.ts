import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HistoricoAsignacionListado } from '../models/historico-asignacion/historico-asignacion-listado';
import { HistoricoAsignacion } from '../models/historico-asignacion/historico-asignacion';

@Injectable({
  providedIn: 'root'
})
export class HistoricoAsignacionService {

  private apiHistoricoAsignacion:string = 'http://localhost:8080/api/historico-asignacion'

  constructor(private http:HttpClient) { }

  listado():Observable<HistoricoAsignacionListado[]>{
    return this.http.get<HistoricoAsignacionListado[]>(`${this.apiHistoricoAsignacion}/listado`);
  }

  registrar(historicoAsignacion:HistoricoAsignacion):Observable<HistoricoAsignacion>{
    return this.http.post<HistoricoAsignacion>(`${this.apiHistoricoAsignacion}/registrar`, historicoAsignacion);
  }

  listadoPorIdUsuarioAsignado(idUsuarioAsignado:number):Observable<HistoricoAsignacionListado>{
    return this.http.get<HistoricoAsignacionListado>(`${this.apiHistoricoAsignacion}/buscarPorIdUsuarioAsignado/${idUsuarioAsignado}`);
  }
  
}
