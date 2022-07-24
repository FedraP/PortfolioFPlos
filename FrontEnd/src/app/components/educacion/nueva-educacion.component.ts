import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

    carrera: String = '';
    cursos: String = '';
    institucion: String = '';
    periodo: String = '';
    altImgInst: String = '';
    urlLogoInst: String = '';

  constructor(private datosEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new educacion(this.carrera, this.cursos, this.institucion, this.periodo, this.altImgInst, this.urlLogoInst);
    this.datosEducacion.guardarEdu(edu).subscribe(data =>{
      alert("La educación fue creada correctamente");
      this.router.navigate(['']);
    }
    , err =>{
      alert("Falló");
      //console.log('error de carga',err);
      this.router.navigate(['']);
    })
  }
}
