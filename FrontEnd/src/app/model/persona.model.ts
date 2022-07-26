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
    url_avatar: String;
    url_fondo: String;

    constructor (nombre: String,
        apellido: String,
        direccion: String,
        email: String,
        telefono:String,
        fecha_nac: String,
        presentacion: String,
        titulo: String,
        acercaDe: String,
        url_avatar: String,
        url_fondo: String){

            this.nombre = nombre;
            this.apellido = apellido;
            this.direccion = direccion;
            this.email = email;
            this.telefono = telefono;
            this.fecha_nac=fecha_nac;
            this.presentacion = presentacion;
            this.titulo = titulo;
            this.acercaDe = acercaDe
            this.url_avatar = url_avatar;
            this.url_fondo = url_fondo;
        }

}