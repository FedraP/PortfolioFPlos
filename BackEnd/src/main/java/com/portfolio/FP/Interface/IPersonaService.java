
package com.portfolio.FP.Interface;

import com.portfolio.FP.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una lista de personas
    public List <Persona> verPersonas ();
    
    //Crear un objeto de tipo persona
    public void crearPersona (Persona perso);
    
    //Eliminar un usuario por id
    public void borrarPersona (Long id);
    
    //Buscar una persona por id
    public Persona buscarPersona (Long id);
    
    //Editar un objeto de tipo persona
    public void editarPersona (Persona perso);
}
