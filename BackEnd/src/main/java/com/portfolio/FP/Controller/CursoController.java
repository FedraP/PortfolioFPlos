
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Curso;
import com.portfolio.FP.Interface.ICursoService;
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

public class CursoController {
    
    private final ICursoService iCursoServ;
    
    @Autowired
    
    public CursoController(ICursoService iCursoServ) {
        this.iCursoServ = iCursoServ;
    }
     
    @GetMapping ("/curso/ver")
    @ResponseBody
    public List <Curso> verCurso(){
        return iCursoServ.verCurso();
    }
    
    @GetMapping ("/curso/ver/{id}")
    @ResponseBody
    public void buscarCurso(@PathVariable Long id){
        iCursoServ.buscarCurso(id);
    }        

    
    @PostMapping ("/curso/crear")
    public void crearCurso (@RequestBody Curso curso){
        iCursoServ.crearCurso (curso);
        //return "El cursoo fue creado correctamente";
    }
    
    @DeleteMapping ("/curso/borrar/{id}")
    
    public void borrarCurso(@PathVariable Long idCurso){
        iCursoServ.borrarCurso(idCurso);
        //return "El ecurso fue eliminado correctamente";
    }
    
    @PutMapping ("/curso/editar/{id}")
    
    public void editarCurso (@RequestBody Curso curso){
        iCursoServ.editarCurso(curso);
    }
}
