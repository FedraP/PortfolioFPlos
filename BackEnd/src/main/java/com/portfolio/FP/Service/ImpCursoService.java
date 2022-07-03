
package com.portfolio.FP.Service;

import com.portfolio.FP.Entity.Curso;
import com.portfolio.FP.Interface.ICursoService;
import com.portfolio.FP.Repository.ICursoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpCursoService implements ICursoService{
    
    private final ICursoRepository iCursoRepo;
    
    @Autowired
    public ImpCursoService(ICursoRepository iCursoRepo) {
        this.iCursoRepo = iCursoRepo;
    }
    
    @Override
    public List <Curso> verCurso() {
    List <Curso> cursosList = iCursoRepo.findAll();
        return cursosList;
    }

    @Override
    public void crearCurso(Curso curso) {
        iCursoRepo.save(curso);    
    }

    @Override
    public void borrarCurso(Long idCurso) {
        iCursoRepo.deleteById(idCurso);
    }

    @Override
    public Curso buscarCurso(Long idCurso) {
        Curso curso = iCursoRepo.findById(idCurso).orElse(null);
        return curso;
    }

    @Override
    public void editarCurso(Curso curso) {
        iCursoRepo.save(curso);
    }
}

