import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricoAsignacion } from '../models/historico-asignacion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoricoAsignacionService {

  private apiHistoricoAsignacion:string = 'http://localhost:8080/api/historico-asignacion'

  constructor(private http:HttpClient) { }

  listadoPorIdUsuarioAsignado(idUsuarioAsignado:number):Observable<HistoricoAsignacion>{
    return this.http.get<HistoricoAsignacion>(`${this.apiHistoricoAsignacion}/buscarPorIdUsuarioAsignado/${idUsuarioAsignado}`);
  }
  
}
