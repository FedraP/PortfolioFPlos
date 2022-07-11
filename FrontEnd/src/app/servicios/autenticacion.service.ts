import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IngresarUsuario } from '../model/ingresar-usuario';
import { JwtDto } from '../model/jwt-dto';
import { NuevoUsuario } from '../model/nuevo-usuario';



@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public ingresar(ingresarUsuario: IngresarUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'ingresar', ingresarUsuario );
  }
  }

