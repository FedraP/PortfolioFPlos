
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
    private String institucion;
    private String cursos;
    private String urlLogoInst;
    private String altImgInst;
    
    @ManyToOne
    private Persona persona;
    
    @ManyToOne
    private Establecimiento_educativo estaEdu;

    public Educacion() {
    }

    public Educacion(Long idEdu, String carrera, String periodo, String institucion, String cursos, String urlLogoInst, String altImgInst) {
        this.idEdu = idEdu;
        this.carrera = carrera;
        this.periodo = periodo;
        this.institucion = institucion;
        this.cursos = cursos;
        this.urlLogoInst = urlLogoInst;
        this.altImgInst = altImgInst;
    }

}
