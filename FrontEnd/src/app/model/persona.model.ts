export class persona {

    idPer?: number;
    nombre: String;
    apellido: String;
    direccion: String;
    email: String;
    telefono:String;
    fecha_nac: String;
    presentacion: String;
    titulo: String;
    acercaDe: String;
    urlAvatar: String;
    urlFondo: String;

    constructor (nombre: String,
        apellido: String,
        direccion: String,
        email: String,
        telefono:String,
        fecha_nac: String,
        presentacion: String,
        titulo: String,
        acercaDe: String,
        urlAvatar: String,
        urlFondo: String){

            this.nombre = nombre;
            this.apellido = apellido;
            this.direccion = direccion;
            this.email = email;
            this.telefono = telefono;
            this.fecha_nac=fecha_nac;
            this.presentacion = presentacion;
            this.titulo = titulo;
            this.acercaDe = acercaDe
            this.urlAvatar = urlAvatar;
            this.urlFondo = urlFondo;
        }

}