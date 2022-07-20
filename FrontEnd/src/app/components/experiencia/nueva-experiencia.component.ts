import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  descripcion: string = '';
  puesto: string = '';
  periodo: string = '';
  empresa: string = '';
  altLogo: string = '';
  urlLogo: string = '';
  
  constructor(private datosExperiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new experiencia(this.descripcion, this.puesto, this.periodo, this.empresa, this.altLogo, this.urlLogo);
    this.datosExperiencia.guardarExpe(expe).subscribe(data =>{
      alert("La experiencia laboral fue creada correctamente");
      this.router.navigate(['']);
    }
    , err =>{
      // alert("Falló");
      console.log('error de carga',err);
      this.router.navigate(['']);
    })
  }

}
