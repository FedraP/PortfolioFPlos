import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL ='http://localhost:8080/proyectos/' 

  constructor(private http:HttpClient) { }

  public traerProyectos(): Observable<proyectos>{
     
    return this.http.get<proyectos>(this.URL + 'ver/')

 }
}
