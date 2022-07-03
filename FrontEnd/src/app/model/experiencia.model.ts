export class experiencia {

    idExpe?: number;
    img: String;
    altImg: String;
    puesto: String;
    empresa: String;
    periodo: String;
    descripcion: String;
    
    constructor (img: String,
        altImg: String,
        puesto: String,
        empresa: String,
        periodo: String,
        descripcion: String){

            this.img = img;
            this.altImg = altImg,
            this.puesto = puesto;
            this.empresa = empresa;
            this.periodo = periodo;
            this.descripcion = descripcion;
        }
    }