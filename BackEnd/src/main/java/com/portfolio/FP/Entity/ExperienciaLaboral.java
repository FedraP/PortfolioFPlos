
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
public class ExperienciaLaboral {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long idExpe;
    
    private String img;
    private String altImg;
    private String puesto;
    private String empresa;
    private String periodo;
    private String descripcion;
    
    public ExperienciaLaboral() {
    }

    @ManyToOne
    private Persona persona;
    
    public ExperienciaLaboral(Long idExpe, String img, String altImg, String puesto, String empresa, String periodo, String descripcion) {
        this.idExpe = idExpe;
        this.img = img;
        this.altImg = altImg;
        this.puesto = puesto;
        this.empresa = empresa;
        this.periodo = periodo;
        this.descripcion = descripcion;
    }
    
    
}



    
