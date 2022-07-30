import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL ='https://portfoliofp.herokuapp.com/habilidades/' 

  constructor(private http:HttpClient) { }

  public traerHabilidades(): Observable<habilidades>{
     
    return this.http.get<habilidades>(this.URL + 'ver/')

 }

 public verHabilidades(id: number): Observable<habilidades>{
  return this.http.get<habilidades>(this.URL + `ver/${id}`)
  
}

 public guardarHabi(habilidad: habilidades): Observable<any>{
   return this.http.post<any>(this.URL + 'crear', habilidad);
 }

 public actualizarHabi(id: number, habilidad: habilidades): Observable<any>{
   return this.http.put<any>(this.URL + `editar/${id}`, habilidad);
 }

 public borrarHabi(id: number): Observable<any>{
   return this.http.delete<any>(this.URL + `borrar/${id}`);
 }
}
