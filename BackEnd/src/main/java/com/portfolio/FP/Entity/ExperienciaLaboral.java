
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
    
    private String puesto;
    private String periodo;
    private String descripcion;
    
    public ExperienciaLaboral() {
    }

    @ManyToOne
    private Persona persona;
    
    @ManyToOne
    private Empresa empre;
    
    public ExperienciaLaboral(Long idExpe, String puesto, String periodo, String descripcion) {
        this.idExpe = idExpe;
        this.puesto = puesto;
        this.periodo = periodo;
        this.descripcion = descripcion;
    }
    
    
}



    
