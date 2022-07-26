
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
public class Habilidades {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long idHabi;
    
    private String nombre;
    private Integer valor;
    private String tipo;
    
   // @ManyToOne
   // private Persona persona;

    public Habilidades() {
    }

    public Habilidades(Long idHabi, String nombre, Integer valor, String tipo) {
        this.idHabi = idHabi;
        this.nombre = nombre;
        this.valor = valor;
        this.tipo = tipo;
        //this.persona = persona;
    }

}
