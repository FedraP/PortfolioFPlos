import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, UploadTaskSnapshot} from '@angular/fire/storage';


@Component({
  selector: 'app-editar-encabezado',
  templateUrl: './editar-encabezado.component.html',
  styleUrls: ['./editar-encabezado.component.css']
})
export class EditarEncabezadoComponent implements OnInit {

  persona: persona = null;
  urlAvatar: String = "https://firebasestorage.googleapis.com/v0/b/portfoliofedraplos.appspot.com/o/imagen%2FFoto.jpg?alt=media&token=fe334299-b8c5-4852-8e88-a4324f337946";
  imagenAvatar: string[] = [];
  imagenFondo: string[] = [];

  
  constructor(private datosPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, private storage: Storage) { 
    this.imagenAvatar = [];
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log('Traer data', id);
    this.datosPersona.verPersona(id).subscribe(
      data => {
        // console.log("Data: ", data);
        this.persona = data;
        
      }, err =>{
        alert('Error al modificar encabezado');
        //console.log('Error editar',err);
        this.router.navigate(['']);
      }
    )
    this.getImagenAvatar();
    this.getImagenFondo();
    
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

  subirImagenAvatar($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `imagenesAvatar/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImagenAvatar();
      })
      .catch(error => console.log(error));

  }

  getImagenAvatar() {
    const imagesRef = ref(this.storage, 'imagenesAvatar');

    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.imagenAvatar = [];
        for (let item of response.items) {
          const urlImgAvatar = await getDownloadURL(item);
          this.imagenAvatar.push(urlImgAvatar);
          // console.log(this.imagenAvatar);
        }
          this.persona.urlAvatar = this.imagenAvatar[0];
          
        
      })
      .catch(error => console.log(error));
  }

  subirImagenFondo($event: any) {
    const imgFondo = $event.target.files[0];
    console.log(imgFondo);

    const imgRef = ref(this.storage, `imagenesFondo/${imgFondo.name}`);

    uploadBytes(imgRef, imgFondo)
      .then(response => {
        console.log(response)
        this.getImagenFondo();
      })
      .catch(error => console.log(error));

  }

  getImagenFondo() {
    const imagRef = ref(this.storage, 'imagenesFondo');

    listAll(imagRef)
      .then(async response => {
        console.log(response);
        this.imagenFondo = [];
        for (let item of response.items) {
          const urlFondo = await getDownloadURL(item);
          this.imagenFondo.push(urlFondo);
        }
          // console.log(this.imagenAvatar);
          this.persona.urlFondo = await getDownloadURL(response.items[0]);
          console.log(this.persona.urlFondo);
          
        
      })
      .catch(error => console.log(error));
  }

  
}

  