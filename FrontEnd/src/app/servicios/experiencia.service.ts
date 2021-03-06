import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL ='https://portfoliofp.herokuapp.com/experiencia/' 

  constructor(private http:HttpClient) {}

    public traerExperiencia(): Observable<experiencia>{
     
      return this.http.get<experiencia>(this.URL + 'ver/')
   }

   public verExperiencia(id: number): Observable<experiencia>{
     
    return this.http.get<experiencia>(this.URL + `ver/${id}`)
    
 }

   public guardarExpe(experiencia: experiencia): Observable<any>{
     return this.http.post<any>(this.URL + 'crear', experiencia);
   }

   public actualizarExp(id: number, experiencia: experiencia): Observable<any>{
     return this.http.put<any>(this.URL + `editar/${id}`, experiencia);
   }

   public borrarExp(id: number): Observable<any>{
     return this.http.delete<any>(this.URL + `borrar/${id}`);
   }
}
