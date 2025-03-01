import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Areas } from '../models/areas';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private apiAreas:string = "http://localhost:8080/api/areas";

  constructor(private http:HttpClient) { }

  listado():Observable<Areas[]>{
    return this.http.get<Areas[]>(`${this.apiAreas}/listado`);
  }

  listadoPorId(idArea:number):Observable<Areas[]>{
    return this.http.get<Areas[]>(`${this.apiAreas}/listado/${idArea}`);
  }
}
