
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Habilidades;
import com.portfolio.FP.Interface.IHabilidadesService;
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
public class HabilidadesController {
    
    private final IHabilidadesService iHabiServ;

    @Autowired
    public HabilidadesController(IHabilidadesService iHabiServ) {
        this.iHabiServ = iHabiServ;
    }
    
    @GetMapping ("/habilidades/ver")
    @ResponseBody
    public List <Habilidades> verHabilidades(){
        return iHabiServ.verHabilidades();
    }
    
    @GetMapping ("/habilidades/ver/{id}")
    //@ResponseBody
    public Habilidades buscarHabilidad(@PathVariable("id") Long id){
        Habilidades habi = iHabiServ.buscarHabilidad(id);
        return habi;
    }
    
    @PostMapping ("/habilidades/crear")
    public void crearHabilidad (@RequestBody Habilidades habi){
        iHabiServ.crearHabilidad(habi);
        //return "La habilidad fue creada correctamente";
    }
    
    @DeleteMapping ("/habilidades/borrar/{id}")
    public void borrarHabilidad(@PathVariable Long id){
        iHabiServ.borrarHabilidad(id);
        //return "La habilidad fue eliminada correctamente";
    }
    
    @PutMapping ("/habilidades/editar/{id}")
    public void editarHabilidad (@RequestBody Habilidades habi){
        iHabiServ.editarHabilidad(habi);
        //return "La habilidad fue modificada correctamente";
    }
    
}
