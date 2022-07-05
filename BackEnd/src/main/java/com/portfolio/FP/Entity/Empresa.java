
package com.portfolio.FP.Entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Empresa implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idEmpresa;
    
    private String nombre;
    private String urlLogo;
    private String altLogo;

    public Empresa() {
    }

    public Empresa(Long idEmpresa, String nombre, String urlLogo, String altLogo) {
        this.idEmpresa = idEmpresa;
        this.nombre = nombre;
        this.urlLogo = urlLogo;
        this.altLogo = altLogo;
    }
    
    
    
}
