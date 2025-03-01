import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricoEquipo } from '../models/historico-equipo';

@Injectable({
  providedIn: 'root'
})
export class HistoricoEquipoService {

  private apiHistoricoEquipo:string = 'http://localhost:8080/api/historico-equipo';

  constructor(private http:HttpClient) { }

  listadoPorIdEquipo(idEquipo:number):Observable<HistoricoEquipo[]>{
    return this.http.get<HistoricoEquipo[]>(`${this.apiHistoricoEquipo}/listado/${idEquipo}`);
  }
}
