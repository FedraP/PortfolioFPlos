import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';

@Component({
  selector: 'app-editar-encabezado',
  templateUrl: './editar-encabezado.component.html',
  styleUrls: ['./editar-encabezado.component.css']
})
export class EditarEncabezadoComponent implements OnInit {

  persona: persona = null;
  urlImg: Array<string> = [];
  
  constructor(private datosPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log('Traer data', id);
    this.datosPersona.verPersona(id).subscribe(
      data => {
        console.log("Data: ", data);
        this.persona = data;
        
      }, err =>{
        alert('Error al modificar encabezado');
        //console.log('Error editar',err);
        this.router.navigate(['']);
      }
    )
    // this.getImagenes();
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosPersona.actualizarPer(id, this.persona).subscribe(
      data => {
        alert("El encabezado fue modificado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert('Error al modificar encabezado');
        this.router.navigate(['']);
      }
    )
  }

  cargarImagen($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `imagen/${file.name}`);

    uploadBytes(imgRef, file)
    .then(async response => {
      console.log(response);
     
    })
      
    .catch(error => console.log(error));
    this.getImagenes();
  }

  getImagenes(){
    const imagenRef = ref(this.storage, 'imagen');

    listAll(imagenRef)
    .then(async response => {
      console.log(response);

      

      for (let item of response.items){
        const urlImg = await getDownloadURL(item);
        console.log(urlImg);
      }

      
    })
    .catch(error => console.log(error));
    
  }

}
