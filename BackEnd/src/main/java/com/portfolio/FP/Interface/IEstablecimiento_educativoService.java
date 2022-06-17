
package com.portfolio.FP.Interface;

import com.portfolio.FP.Entity.Establecimiento_educativo;
import java.util.List;


public interface IEstablecimiento_educativoService {
    
    //Traer una lista de establecimientos educativos
    public List <Establecimiento_educativo> verEstablecimientoEdu ();
    
    //Crear un objeto de tipo establecimiento educativo
    public void crearEstablecimientoEdu (Establecimiento_educativo establecimientoEdu);
    
    //Eliminar una establecimiento educativo por id
    public void borrarEstablecimientoEdu (Long idEstEdu);
    
    //Buscar una establecimiento educativo por id
    public Establecimiento_educativo buscarEstablecimientoEdu (Long idEstEdu);
    
    //Editar un objeto de tipo establecimiento educativo
    public void editarEstablecimientoEdu (Establecimiento_educativo establecimientoEdu);
}
