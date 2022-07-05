
package com.portfolio.FP.Entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Redes implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idRedS;
    private String nombre;
    private String urlRedS;
    private String icono;
    
   @ManyToOne
    private Persona persona;

    public Redes() {
    }
    
    public Redes(Long idRedS, String nombre, String urlRedS, String icono) {
        this.idRedS = idRedS;
        this.nombre = nombre;
        this.urlRedS = urlRedS;
        this.icono = icono;
    }
    
    
    
}
