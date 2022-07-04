
package com.portfolio.FP.Interface;

import com.portfolio.FP.Entity.Habilidades;
import java.util.List;


public interface IHabilidadesService {
        
    //Traer una lista de habilidades
    public List <Habilidades> verHabilidades ();
    
    //Crear un objeto de tipo habilidades
    public void crearHabilidad (Habilidades habi);
    
    //Eliminar una habilidad por id
    public void borrarHabilidad (Long id);
    
    //Buscar una habilidad por id
    public Habilidades buscarHabilidad (Long id);
    
    //Editar un objeto de tipo habilidades
    public void editarHabilidad(Habilidades habi);
}
