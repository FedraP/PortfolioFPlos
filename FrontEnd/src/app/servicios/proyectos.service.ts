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

 public verProyecto(id: number): Observable<proyectos>{
  return this.http.get<proyectos>(this.URL + `ver/${id}`)
  
}

 public guardarProy(proyecto: proyectos): Observable<any>{
   return this.http.post<any>(this.URL + 'crear', proyecto);
 }

 public actualizarProy(id: number, proyecto: proyectos): Observable<any>{
   return this.http.put<any>(this.URL + `editar/${id}`, proyecto);
 }

 public borrarProy(id: number): Observable<any>{
   return this.http.delete<any>(this.URL + `borrar/${id}`);
 }
}
