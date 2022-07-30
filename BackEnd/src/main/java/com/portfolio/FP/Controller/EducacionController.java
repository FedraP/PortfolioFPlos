
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Educacion;
import com.portfolio.FP.Interface.IEducacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin (origins = "*")
    public class EducacionController {
    
    private final IEducacionService iEduServ;
    
    @Autowired
    public EducacionController(IEducacionService iEduServ) {
        this.iEduServ = iEduServ;
    }
     
    @GetMapping ("/educacion/ver")
    @ResponseBody
    public List <Educacion> verEducacion(){
        return iEduServ.verEducacion();
    }
  
    
    @GetMapping ("/educacion/ver/{id}")
    //@ResponseBody
    public Educacion buscarEducacion(@PathVariable("id") Long id){
        Educacion edu = iEduServ.buscarEducacion(id);
        return edu;
    }
      
    @GetMapping ("/educacion/ver/cursos")
    public Educacion buscarEducacion(){
       return iEduServ.buscarEducacion((long)4);
    }  
    
    @PostMapping ("/educacion/crear")
    public void crearEducacion (@RequestBody Educacion edu){
        iEduServ.crearEducacion(edu);
        //return "La educacion fue creada correctamente";
    }
    
    @DeleteMapping ("/educacion/borrar/{id}")
    public void borrarEducacion(@PathVariable Long id){
        iEduServ.borrarEducacion(id);
        //return "La educacion fue eliminada correctamente";
    }
    
    @PutMapping ("/educacion/editar/{id}")
    public void editarEducacion (@RequestBody Educacion edu){
        iEduServ.editarEducacion(edu);
        //return "La educaicion fue modificada correctamente";
    }
}
