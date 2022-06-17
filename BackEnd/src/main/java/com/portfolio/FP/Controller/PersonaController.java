
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Persona;
import com.portfolio.FP.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
public class PersonaController {
    
    private final IPersonaService iPersoServ;

    @Autowired
    public PersonaController(IPersonaService iPersoServ) {
        this.iPersoServ = iPersoServ;
    }
    
    @GetMapping ("/ver/personas")
    @ResponseBody
    public List <Persona> verPersonas(){
        return iPersoServ.verPersonas();
    }
    
    @GetMapping ("/ver/persona/{id}")
    @ResponseBody
    public Persona buscarPersona(@PathVariable Long id){
        return iPersoServ.buscarPersona(id);
        
    }
    
    @PostMapping ("/crear/persona")
    public String crearPersona (@RequestBody Persona perso){
        iPersoServ.crearPersona(perso);
        return "La persona fue creada correctamente";
    }
    
    @DeleteMapping ("/borrar/persona/{id}")
    
    public String borrarPersona(@PathVariable Long id){
        iPersoServ.borrarPersona(id);
        return "La persona fue eliminada correctamente";
    }
    
    @PutMapping ("/editar/persona/{id}")
    
    public String editarPersona (@RequestBody Persona perso){
        iPersoServ.editarPersona(perso);
        return "La persona fue modificada correctamente";
    }
}
