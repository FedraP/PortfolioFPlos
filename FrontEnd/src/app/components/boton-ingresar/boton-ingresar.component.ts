import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-boton-ingresar',
  templateUrl: './boton-ingresar.component.html',
  styleUrls: ['./boton-ingresar.component.css']
})
export class BotonIngresarComponent implements OnInit {

  isLogged = false;

  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

    onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
