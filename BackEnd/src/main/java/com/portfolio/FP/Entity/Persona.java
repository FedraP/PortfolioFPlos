
package com.portfolio.FP.Entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "persona")
public class Persona implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idPer;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud")
    private String apellido;
    
    private String direccion;
    
    private String telefono;
    
    private Date fechaNac;
    
    private String email;
    
    private String presentacion;
    private String acercaDe;
    private String urlAvatar;
    private String urlFondo;
    private String titulo;

    public Persona() {
    }
    
    //@OneToMany (mappedBy = "idEdu", fetch = FetchType.LAZY)
   // private List<Educacion> educacionList;
    
    //@OneToMany (mappedBy = "experiencia_laboral",cascade = CascadeType.ALL, orphanRemoval =true)
    //private List<ExperienciaLaboral> experienciaList;
    
    public Persona(Long idPer, String nombre, String apellido, String direccion, String telefono, Date fechaNac, String email,
                    String presentacion, String acercaDe, String urlAvatar, String urlFondo, String titulo) {
        this.idPer = idPer;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaNac = fechaNac;
        this.email = email;
        this.presentacion = presentacion;
        this.acercaDe = acercaDe;
        this.urlAvatar = urlAvatar;
        this.urlFondo = urlFondo;
        this.titulo = titulo;
    }
    
    
    
       
}
