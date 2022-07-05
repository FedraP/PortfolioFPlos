import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { redes } from '../model/redes.model';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  URL ='http://localhost:8080/redes/' 

  constructor(private http:HttpClient) { }

  public traerRedes(): Observable<redes>{
     
    return this.http.get<redes>(this.URL + 'ver/')
  }

  public traerUnaRed(): Observable<redes>{
     
    return this.http.get<redes>(this.URL + 'ver/una')
  }
}
