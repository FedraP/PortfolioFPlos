export class habilidades {

    id?: number;
    nombre: String;
    valor: number;
    tipo: String;

    constructor (nombre: String,
        valor: number,
        tipo: String){

            this.nombre = nombre;
            this.valor = valor;
            this.tipo = tipo;
        }
    }