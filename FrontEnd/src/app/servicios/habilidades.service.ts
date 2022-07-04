import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL ='http://localhost:8080/habilidades/' 

  constructor(private http:HttpClient) { }

  public traerHabilidades(): Observable<habilidades>{
     
    return this.http.get<habilidades>(this.URL + 'ver/')

 }
}
