import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-datos-personales',
  templateUrl: './editar-datos-personales.component.html',
  styleUrls: ['./editar-datos-personales.component.css']
})
export class EditarDatosPersonalesComponent implements OnInit {

  persona: persona = null;

  constructor(private datosPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    // console.log('Traer data', id);
    this.datosPersona.verPersona(id).subscribe(
      data => {
        //console.log("Data: ", id, data);
        this.persona = data;
        
      }, err =>{
        alert('Error al modificar datos personales');
        //console.log('Error editar',err);
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosPersona.actualizarPer(id, this.persona).subscribe(
      data => {
        alert("Los datos personales fueron modificados correctamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar datos personales');
        this.router.navigate(['']);
      }
    )
  }

}
