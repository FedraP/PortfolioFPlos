
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Redes;
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
import com.portfolio.FP.Interface.IRedesService;

@RestController
@CrossOrigin (origins = "*")
public class RedesController {
    
    private final IRedesService iRedServ;

    @Autowired
    public RedesController(IRedesService iRedServ) {
        this.iRedServ = iRedServ;
    }
    
    @GetMapping ("/redes/ver")
    @ResponseBody
    public List <Redes> verRed(){
        return iRedServ.verRedS();
    }
    
    @GetMapping ("/redes/ver/{id}")
    @ResponseBody
    public Redes buscarRedS(@PathVariable Long id){
        return iRedServ.buscarRedS(id);
    }
    
    @GetMapping ("/redes/ver/una")
     public Redes buscarRedes(){
        return iRedServ.buscarRedS((long)1);
     }
    
    @PostMapping ("/redes/crear")
    public String crearRedS (@RequestBody Redes proy){
        iRedServ.crearRedS(proy);
        return "La red social fue creada correctamente";
    }
    
    @DeleteMapping ("/redes/borrar/{id}")
    
    public String borrarRedS(@PathVariable Long id){
        iRedServ.borrarRedS(id);
        return "La red social fue eliminada correctamente";
    }
    
    @PutMapping ("/redes/editar/{id}")
    
    public String editarRedS (@RequestBody Redes redS){
        iRedServ.editarRedS(redS);
        return "La red social fue modificada correctamente";
    }
    
    
}
