
package com.portfolio.FP.Controller;

import com.portfolio.FP.Entity.Curso;
import com.portfolio.FP.Interface.ICursoService;
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
public class CursoController {
    @Autowired
    private ICursoService iCursoServ;
     
    @GetMapping ("/ver/curso")
    @ResponseBody
    public List <Curso> verECurso(){
        return iCursoServ.verCurso();
    }
    
    @GetMapping ("/ver/curso/{id}")
    @ResponseBody
    public void buscarCurso(@PathVariable Long id){
        iCursoServ.buscarCurso(id);
    }        

    
    @PostMapping ("/crear/curso")
    public String crearCurso (@RequestBody Curso curso){
        iCursoServ.crearCurso (curso);
        return "El cursoo fue creado correctamente";
    }
    
    @DeleteMapping ("/borrar/curso/{id}")
    
    public String borrarCurso(@PathVariable Long idCurso){
        iCursoServ.borrarCurso(idCurso);
        return "El ecurso fue eliminado correctamente";
    }
    
    @PutMapping ("/editar/curso/{id}")
    
    public void editarCurso (@RequestBody Curso curso){
        iCursoServ.editarCurso(curso);
    }
}
