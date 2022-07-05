
package com.portfolio.FP.Interface;

import com.portfolio.FP.Entity.Redes;
import java.util.List;


public interface IRedesService {
    
    //Traer una lista de redes sociales
    public List <Redes> verRedS ();
    
    //Crear un objeto de tipo red social
    public void crearRedS (Redes redS);
    
    //Eliminar una red social por id
    public void borrarRedS (Long id);
    
    //Buscar una red social por id
    public Redes buscarRedS (Long id);
    
    //Editar un objeto de tipo red social
    public void editarRedS (Redes redS);

}
