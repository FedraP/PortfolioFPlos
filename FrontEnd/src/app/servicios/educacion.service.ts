import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL ='https://portfoliofp.herokuapp.com/educacion/' 

  constructor(private http:HttpClient) { }

  public traerEducacion(): Observable<educacion>{
     
    return this.http.get<educacion>(this.URL + 'ver/')
 }

 public verEducacion(id: number): Observable<educacion>{
  return this.http.get<educacion>(this.URL + `ver/${id}`)
  
}

 public guardarEdu(educacion: educacion): Observable<any>{
   return this.http.post<any>(this.URL + 'crear', educacion);
 }

 public actualizarEdu(id: number, educacion: educacion): Observable<any>{
   return this.http.put<any>(this.URL + `editar/${id}`, educacion);
 }

 public borrarEdu(id: number): Observable<any>{
   return this.http.delete<any>(this.URL + `borrar/${id}`);
 }

}
