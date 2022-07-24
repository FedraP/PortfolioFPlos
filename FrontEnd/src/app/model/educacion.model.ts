export class educacion {

    idEdu? : number;
    carrera: String;
    cursos: String;
    institucion: String;
    periodo: String;
    altImgInst: String;
    urlLogoInst: String;
    

    constructor(carrera: String,
                cursos: String,
                periodo: String,
                institucion: String,
                altImgInst: String,
                urlLogoInst: String) {

        this.carrera = carrera;
        this.cursos = cursos;
        this.periodo = periodo;
        this.institucion = institucion;
        this.altImgInst = altImgInst;
        this.urlLogoInst = urlLogoInst;
    }
}
