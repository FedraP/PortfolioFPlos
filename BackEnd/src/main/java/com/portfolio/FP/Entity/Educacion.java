
package com.portfolio.FP.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Educacion {
     
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long idEdu;
    
    private String carrera;
    private String periodo;
    private String cursos;
    private String institucion;
    private String altImgInst;
    private String urlLogoInst;
   
    
    //@ManyToOne
    //private Persona persona;
    
    //@ManyToOne
    //private Establecimiento_educativo estaEdu;

    public Educacion() {
    }

    public Educacion(Long idEdu, String carrera, String periodo, String cursos, String institucion, String altImgInst, String urlLogoInst) {
        this.idEdu = idEdu;
        this.carrera = carrera;
        this.periodo = periodo;
        this.cursos = cursos;
        this.institucion = institucion;
        this.altImgInst = altImgInst;
        this.urlLogoInst = urlLogoInst;
    }

}
