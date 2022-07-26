import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  persona: persona = null;
  acerca_DeList: Array<string> = [];

  constructor(private datosPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    //console.log('Traer data persona', id);
    this.datosPersona.verPersona(id).subscribe(
      data => {
        this.persona = data;
        this.acerca_DeList = this.persona.acercaDe.split("\n");
        console.log(this.acerca_DeList);
        
      }, err =>{
        alert('Error al modificar proyecto');
        //console.log('Error editar',err);
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosPersona.actualizarPer(id, this.persona).subscribe(
      data => {
        alert("La sección 'Acerca de mi' fue modificada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar sección "Acerca de mi"');
        this.router.navigate(['']);
      }
    )
  }

}
