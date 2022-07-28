
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Establecimiento_educativo;
import com.portfolio.FP.Service.ImpEstablecimiento_educativoService;
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
public class Establecimiento_EducativoController {
    @Autowired
    private ImpEstablecimiento_educativoService iEstEduServ;
     
    @GetMapping ("/establecimiento_educativo/ver")
    @ResponseBody
    public List <Establecimiento_educativo> verEstablecimientoEdu(){
        return iEstEduServ.verEstablecimientoEdu();
    }
    
    @GetMapping ("/ver/establecimiento_educativo/{id}")
    @ResponseBody
    public void buscarEstablecimientoEdu(@PathVariable Long id){
        iEstEduServ.buscarEstablecimientoEdu(id);
    }   
    
    @PostMapping ("/crear/establecimiento_educativo")
    public String crearEstablecimientoEdu (@RequestBody Establecimiento_educativo establecimientoEdu){
        iEstEduServ.crearEstablecimientoEdu (establecimientoEdu);
        return "El establecimiento educativo fue creado correctamente";
    }
    
    @DeleteMapping ("/borrar/establecimiento_educativo/{id}")
    
    public String borrarEstablecimientoEdu(@PathVariable Long idEstEdu){
        iEstEduServ.borrarEstablecimientoEdu(idEstEdu);
        return "El establecimiento educativo fue eliminado correctamente";
    }
    
    @PutMapping ("/editar/establecimiento_educativo/{id}")
    
    public void editarEstablecimientoEdu (@RequestBody Establecimiento_educativo establecimientoEdu){
        iEstEduServ.editarEstablecimientoEdu(establecimientoEdu);
    }
}
