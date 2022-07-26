export class proyectos {

    idProy?: number;
    nombre: String;
    descripcion: String;
    urlProyecto: String;

    constructor (nombre: String,
        descripcion: String,
        urlProyecto: String){

            this.nombre = nombre;
            this.descripcion = descripcion;
            this.urlProyecto = urlProyecto;
        }
    }