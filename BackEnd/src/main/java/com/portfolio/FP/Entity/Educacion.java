
package com.portfolio.FP.Entity;

import java.util.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Educacion {
    
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long idEdu;
    private String carrera;
    private Date fechaInicio;
    private Date fechaFin;
    
    //@ManyToOne (fetch = FetchType.LAZY)
    //@JoinColumn (name = "idEstEdu")
    //private List <Establecimiento_educativo> establecimientoEduList;

    public Educacion(Long idEdu, String carrera, Date fechaInicio, Date fechaFin) {
        this.idEdu = idEdu;
        this.carrera = carrera;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    
    
}
