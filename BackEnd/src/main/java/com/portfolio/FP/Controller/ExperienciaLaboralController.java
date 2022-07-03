
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.ExperienciaLaboral;
import com.portfolio.FP.Interface.IExperienciaLaboralService;
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
@CrossOrigin (origins = "http://localhost:4200")
public class ExperienciaLaboralController {
    
    private final IExperienciaLaboralService iExpeServ;

    @Autowired
    public ExperienciaLaboralController(IExperienciaLaboralService iExpeServ) {
        this.iExpeServ = iExpeServ;
    }
    
    @GetMapping ("/experiencia/ver")
    @ResponseBody
    public List <ExperienciaLaboral> verExperiencia(){
        return iExpeServ.verExperiencia();
    }
    
    @GetMapping ("/experiencia/ver/{id}")
    @ResponseBody
    public ExperienciaLaboral buscarExperiencia(@PathVariable Long id){
        return iExpeServ.buscarExperiencia(id);
    }
    
    
    @PostMapping ("/experiencia/crear")
    public String crearExperiencia (@RequestBody ExperienciaLaboral experiencia){
        iExpeServ.crearExperiencia(experiencia);
        return "La experiencia laboral fue creada correctamente";
    }
    
    @DeleteMapping ("/experiencia/borrar/{id}")
    
    public String borrarExperiencia(@PathVariable Long id){
        iExpeServ.borrarExperiencia(id);
        return "La experiencia laboral fue eliminada correctamente";
    }
    
    @PutMapping ("/experiencia/editar/{id}")
    
    public String editarExperiencia (@RequestBody ExperienciaLaboral experiencia){
        iExpeServ.editarExperiencia(experiencia);
        return "La experiencia fue modificada correctamente";
    }
}
