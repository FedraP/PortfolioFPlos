import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngresarUsuario } from 'src/app/model/ingresar-usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  ingresarUsuario! : IngresarUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  // form: FormGroup
  constructor(private tokenService: TokenService, private autenticacionService: AutenticacionService, private router: Router){} 
    // this.form= this.formBuilder.group(
      // {
        // "email":['', [Validators.required, Validators.email]],
        // "password": ['', [Validators.required, Validators.minLength(8)]],
        // "deviceInfo": this.formBuilder.group({
        // "deviceId":["123456789"],
        // "deviceType":["DEVICE_TYPE_ANDROID"],
        // "notificationToken": ["123456789123456"],
        // })
     

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.ingresarUsuario = new IngresarUsuario(this.nombreUsuario, this.password);
    this.autenticacionService.ingresar(this.ingresarUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.SetAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['']);
    },
    err=>{
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
  
  }

}
