
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Persona;
import com.portfolio.FP.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin (origins = "*")
public class PersonaController {
    
    private final IPersonaService iPersoServ;

    @Autowired
    public PersonaController(IPersonaService iPersoServ) {
        this.iPersoServ = iPersoServ;
    }
    
    @GetMapping ("/persona/ver")
    @ResponseBody
    public List <Persona> verPersonas(){
        return iPersoServ.verPersonas();
    }
    
    @GetMapping ("/persona/ver/{id}")
    //@ResponseBody
    public Persona buscarPersona(@PathVariable("id") Long id){
        Persona per = iPersoServ.buscarPersona(id);
        return per;
        
    }
    
    @GetMapping ("/persona/ver/perfil")
     public Persona buscarPersona(){
        return iPersoServ.buscarPersona((long)1);
     }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/persona/crear")
    public void crearPersona (@RequestBody Persona perso){
        iPersoServ.crearPersona(perso);
        //return "La persona fue creada correctamente";
    }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/persona/borrar/{id}")
    public String borrarPersona(@PathVariable Long id){
        iPersoServ.borrarPersona(id);
        return "La persona fue eliminada correctamente";
    }
    
    //@PreAuthorize("hasRole('ADMIN')")
    @PutMapping ("/persona/editar/{id}")
    public void editarPersona (@RequestBody Persona perso){
        iPersoServ.editarPersona(perso);
       // return "La persona fue modificada correctamente";
    }
}
