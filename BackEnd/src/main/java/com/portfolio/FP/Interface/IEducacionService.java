
package com.portfolio.FP.Interface;

import com.portfolio.FP.Entity.Educacion;
import java.util.List;


public interface IEducacionService {
    
    //Traer una lista de educacion
    public List <Educacion> verEducacion ();
    
    
    //Crear un objeto de tipo educacion
    public void crearEducacion (Educacion edu);
    
    //Eliminar una educacion por id
    public void borrarEducacion (Long idEdu);
    
    //Buscar una educacion por id
    public Educacion buscarEducacion (Long idEdu);
    
    //Editar un objeto de tipo educacion
    public void editarEducacion (Educacion edu);
}
