import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get ('./assets/datos/datos.json');
  }
}
