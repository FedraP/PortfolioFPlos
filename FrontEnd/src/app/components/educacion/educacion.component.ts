import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  providers: [ EducacionService]
})

export class EducacionComponent implements OnInit {

  educacion: educacion = new educacion ("", "", "","","","");
 
  educacionList: any;
  

  constructor(private datosEducacion: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

    cargarEducacion(): void{
        this.datosEducacion.traerEducacion().subscribe(datos =>{
        this.educacion = datos;
        this.educacionList = datos;
      }) 
    };

    borrar(id?: number){
      if(id != undefined){
        this.datosEducacion.borrarEdu(id).subscribe(
          data =>{
            this.cargarEducacion();
          }, err =>{
            alert(" No se pudo borrar la experiencia");
          }
        )
      }
    }
  }

