
package com.portfolio.FP.Entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "empresa")
public class Empresa implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idEmpresa;
    
    private String nombre;
    private String urlLogo;
    private String altLogo;
    
    //@OneToMany (mappedBy = "experiencia_laboral",cascade = CascadeType.ALL, orphanRemoval =true)
    //private List<ExperienciaLaboral> experienciaList;

    public Empresa() {
    }

    public Empresa(Long idEmpresa, String nombre, String urlLogo, String altLogo) {
        this.idEmpresa = idEmpresa;
        this.nombre = nombre;
        this.urlLogo = urlLogo;
        this.altLogo = altLogo;
    }
    
    
    
}
