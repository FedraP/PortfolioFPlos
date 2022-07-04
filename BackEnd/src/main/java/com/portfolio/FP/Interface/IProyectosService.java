
package com.portfolio.FP.Interface;

import com.portfolio.FP.Entity.Proyectos;
import java.util.List;


public interface IProyectosService {

    //Traer una lista de proyectos
    public List <Proyectos> verProyectos ();
    
    //Crear un objeto de tipo proyectos
    public void crearProyecto (Proyectos proy);
    
    //Eliminar un proyecto por id
    public void borrarProyecto (Long id);
    
    //Buscar un proyecto por id
    public Proyectos buscarProyecto (Long id);
    
    //Editar un objeto de tipo proyectos
    public void editarProyecto (Proyectos proy);

    
}
