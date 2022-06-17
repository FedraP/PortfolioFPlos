
package com.portfolio.FP.Interface;

import com.portfolio.FP.Entity.Curso;
import java.util.List;


public interface ICursoService {
    
    //Traer una lista de cursos
    public List <Curso> verCurso ();
    
    //Crear un objeto de tipo curso
    public void crearCurso (Curso curso);
    
    //Eliminar un curso por id
    public void borrarCurso (Long idCurso);
    
    //Buscar un curso por id
    public Curso buscarCurso (Long idCurso);
    
    //Editar un objeto de tipo curso
    public void editarCurso (Curso curso);
}
