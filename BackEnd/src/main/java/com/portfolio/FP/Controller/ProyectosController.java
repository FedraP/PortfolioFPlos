
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Proyectos;
import com.portfolio.FP.Interface.IProyectosService;
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
public class ProyectosController {
    
    private final IProyectosService iProyServ;

    @Autowired
    public ProyectosController(IProyectosService iProyServ) {
        this.iProyServ = iProyServ;
    }
    
    @GetMapping ("/proyectos/ver")
    @ResponseBody
    public List <Proyectos> verProyectos(){
        return iProyServ.verProyectos();
    }
    
    @GetMapping ("/proyectos/ver/{id}")
    @ResponseBody
    public Proyectos buscarProyecto(@PathVariable Long id){
        return iProyServ.buscarProyecto(id);
    }
    
    @PostMapping ("/proyectos/crear")
    public String crearProyecto (@RequestBody Proyectos proy){
        iProyServ.crearProyecto(proy);
        return "El proyecto fue creado correctamente";
    }
    
    @DeleteMapping ("/proyectos/borrar/{id}")
    
    public String borrarProyecto(@PathVariable Long id){
        iProyServ.borrarProyecto(id);
        return "El proyecto fue eliminado correctamente";
    }
    
    @PutMapping ("/proyectos/editar/{id}")
    
    public String editarProyecto (@RequestBody Proyectos proy){
        iProyServ.editarProyecto(proy);
        return "El proyecto fue modificado correctamente";
    }
    
    
}
