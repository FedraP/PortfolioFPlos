import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL ='http://localhost:8080/experiencia/' 

  constructor(private http:HttpClient) {}

    public traerExperiencia(): Observable<experiencia>{
     
      return this.http.get<experiencia>(this.URL + 'ver/')
   }

   public guardarExpe(experiencia: experiencia): Observable<any>{
     return this.http.post<any>(this.URL + 'crear', experiencia);
   }

   public actualizarExp(id: number, experiencia: experiencia): Observable<any>{
     return this.http.put<any>(this.URL + 'editar/${id}', experiencia);
   }

   public borrarExp(id: number, experiencia: experiencia): Observable<any>{
     return this.http.delete<any>(this.URL + 'borrar/${id}');
   }
}
