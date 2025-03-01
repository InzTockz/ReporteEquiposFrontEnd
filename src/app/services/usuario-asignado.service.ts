import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioAsignado } from '../models/usuario-asignado';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAsignadoService {

  private apiUsuarioAsignado:string = 'http://localhost:8080/api/usuario-asignado';

  constructor(private http:HttpClient) { }

  listado():Observable<UsuarioAsignado[]>{
    return this.http.get<UsuarioAsignado[]>(`${this.apiUsuarioAsignado}/listado`);
  }

  listadoPorId(idUsuarioAsignado:number):Observable<UsuarioAsignado[]>{
    return this.http.get<UsuarioAsignado[]>(`${this.apiUsuarioAsignado}/listado/${idUsuarioAsignado}`);
  }
}
