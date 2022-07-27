import { Component, OnInit } from '@angular/core';
import { curso } from 'src/app/model/curso.model';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [ CursoService]
})
export class CursosComponent implements OnInit {

  curso: curso = new curso ("");

  cursosList: any;

  constructor(private datosCursos: CursoService) { }

  ngOnInit(): void {

    this.datosCursos.traerCurso().subscribe(datos =>{
      this.curso = datos;
      this.cursosList = datos;
      // console.log(this.cursosList);

    });
  }

}
