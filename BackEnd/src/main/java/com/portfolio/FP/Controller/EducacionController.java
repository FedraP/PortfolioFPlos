
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Educacion;
import com.portfolio.FP.Interface.IEducacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EducacionController {
    @Autowired
    private IEducacionService iEduServ;
     
    @GetMapping ("/ver/educacion")
    @ResponseBody
    public List <Educacion> verEducacion(){
        return iEduServ.verEducacion();
    }
    
    @GetMapping ("/ver/educacion/{id}")
    @ResponseBody
    public void buscarEducacion(@PathVariable Long id){
        iEduServ.buscarEducacion(id);
    }        
    
    @PostMapping ("/crear/educacion")
    public String crearEducacion (@RequestBody Educacion edu){
        iEduServ.crearEducacion(edu);
        return "La educacion fue creada correctamente";
    }
    
    @DeleteMapping ("/borrar/educacion/{id}")
    
    public String borrarEducacion(@PathVariable Long id){
        iEduServ.borrarEducacion(id);
        return "La educacion fue eliminada correctamente";
    }
    
    @PutMapping ("/editar/educacion/{id}")
    
    public void editarEducacion (@RequestBody Educacion edu){
        iEduServ.editarEducacion(edu);
    }
}
