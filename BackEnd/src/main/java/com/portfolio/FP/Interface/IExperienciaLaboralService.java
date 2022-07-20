
package com.portfolio.FP.Interface;

import com.portfolio.FP.Entity.ExperienciaLaboral;
import java.util.List;


public interface IExperienciaLaboralService {
    
    //Traer una lista de Experiencia Laboral
    public List <ExperienciaLaboral> verExperiencia ();
    
    //Crear un objeto de tipo Experiencia
    public void crearExperiencia (ExperienciaLaboral experiencia);
    
    //Eliminar una Experiencia  por id
    public void borrarExperiencia (Long id);
    
    //Buscar una experiencia por id
    public ExperienciaLaboral buscarExperiencia (Long id);
    
    //Editar un objeto de tipo Experiencia Laboral
    public void editarExperiencia (ExperienciaLaboral experiencia);
    
    //Verificar por Id si un objeto de tipo Experiencia Laboral existe
    public boolean existePorId (Long id);
}
