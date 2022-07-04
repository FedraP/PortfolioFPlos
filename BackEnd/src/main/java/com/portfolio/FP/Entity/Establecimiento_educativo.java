
package com.portfolio.FP.Entity;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
 public class Establecimiento_educativo {
    
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long idEstEdu;
    
    private String establecimientoEdu;
    private String url_logoEstablecimiento;
    private String alt_logoEstablecimiento;
    
    //@OneToMany (fetch = FetchType.LAZY, mappedBy = "idEdu")
    //private List<Educacion> educacionList;
    //@ManyToOne
    //private Educacion educacion;
    
    //@OneToMany (mappedBy = "idCurso",fetch = FetchType.LAZY )
    //private List<Curso> cursosList;

    public Establecimiento_educativo() {
    }
    

    public Establecimiento_educativo(Long idEstEdu, String establecimientoEdu, String url_logoEstablecimiento, String alt_logoEstablecimiento) {
        this.idEstEdu = idEstEdu;
        this.establecimientoEdu = establecimientoEdu;
        this.url_logoEstablecimiento = url_logoEstablecimiento;
        this.alt_logoEstablecimiento = alt_logoEstablecimiento;
        //this.cursosList = cursosList;
    }
    
    

    
    
    
}
