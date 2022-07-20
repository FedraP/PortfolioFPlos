export class experiencia {

    idExpe?: number;
    descripcion: String;
    puesto: String;
    periodo: String;
    empresa: String;
    altLogo: String;
    urlLogo: String;
    
    
    constructor (
        descripcion: String,
        puesto: String,
        periodo: String,
        empresa: String,
        altLogo: String,
        urlLogo: String ){

            this.descripcion = descripcion;
            this.puesto = puesto;
            this.periodo = periodo;
            this.empresa = empresa;
            this.altLogo = altLogo,
            this.urlLogo = urlLogo;
            
        }
    }