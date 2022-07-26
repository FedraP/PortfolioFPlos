import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL ='http://localhost:8080/persona/' 

  constructor(private http:HttpClient) {}

   public getPersona(): Observable<persona>{
     return this.http.get<persona>(this.URL + 'ver/perfil')

   }

   public verPersona(id: number): Observable<persona>{
    return this.http.get<persona>(this.URL + `ver/${id}`)
    
  }
  
   public guardarPer(persona: persona): Observable<any>{
     return this.http.post<any>(this.URL + 'crear', persona);
   }
  
   public actualizarPer(id: number, persona: persona): Observable<any>{
     return this.http.put<any>(this.URL + `editar/${id}`, persona);
   }
  
   public borrarPer(id: number): Observable<any>{
     return this.http.delete<any>(this.URL + `borrar/${id}`);
   }
   
}
