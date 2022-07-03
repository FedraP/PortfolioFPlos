
package com.portfolio.FP.Entity;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Curso {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idCurso;
    private String curso;

    public Curso() {
    }
    
    @ManyToOne
    private Educacion educacion;

    public Curso(Long idCurso, String curso) {
        this.idCurso = idCurso;
        this.curso = curso;
        
    }
    
    
}
