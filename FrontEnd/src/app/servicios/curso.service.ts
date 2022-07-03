import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { curso } from '../model/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  URL ='http://localhost:8080/curso/' 

  constructor(private http:HttpClient) { }

  public traerCurso(): Observable<curso>{
     
    return this.http.get<curso>(this.URL + 'ver/')
  }
}
