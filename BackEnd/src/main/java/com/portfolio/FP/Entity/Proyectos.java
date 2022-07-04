
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
public class Proyectos implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idProy;
    private String nombre;
    private String descripcion;
    private String urlProyecto;
    
     @ManyToOne
    private Persona persona;

    public Proyectos() {
    }

    public Proyectos(Long idProy, String nombre, String descripcion, String urlProyecto) {
        this.idProy = idProy;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlProyecto = urlProyecto;
    }
    
}
