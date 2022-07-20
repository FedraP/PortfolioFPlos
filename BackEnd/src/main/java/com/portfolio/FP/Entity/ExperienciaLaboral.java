
package com.portfolio.FP.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "experiencia_laboral")
public class ExperienciaLaboral {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long idExpe;
    
    private String puesto;
    private String periodo;
    private String descripcion;
    private String empresa;
    private String urlLogo;
    private String altLogo;
    
    public ExperienciaLaboral() {
    }

    //@ManyToOne()
    //@JoinColumn(name = "Persona_id_per")
    //private Persona persona;
    
    //@ManyToOne()
    //@JoinColumn(name = "Empre_id_empresa")
    //private Empresa empre;
    
    public ExperienciaLaboral(Long idExpe, String puesto, String periodo, String descripcion, String empresa,String urlLogo,String altLogo) {
        this.idExpe = idExpe;
        this.puesto = puesto;
        this.periodo = periodo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.urlLogo = urlLogo;
        this.altLogo = altLogo;
    }
}



    
