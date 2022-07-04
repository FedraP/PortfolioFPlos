
package com.portfolio.FP.Service;

import com.portfolio.FP.Entity.Proyectos;
import com.portfolio.FP.Interface.IProyectosService;
import com.portfolio.FP.Repository.IProyectosRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ImpProyectosService implements IProyectosService {
    
    private final IProyectosRepository iProyRepo;

    @Autowired
    public ImpProyectosService(IProyectosRepository iProyRepo) {
        this.iProyRepo = iProyRepo;
    }
    
    @Override
    public List<Proyectos> verProyectos() {
    List<Proyectos> proyList = iProyRepo.findAll();
        return proyList;
    }

    @Override
    public void crearProyecto(Proyectos proy) {
        iProyRepo.save(proy);    
    }

    @Override
    public void borrarProyecto(Long id) {
        iProyRepo.deleteById(id);
    }

    @Override
    public Proyectos buscarProyecto (Long id) {
        Proyectos proy = iProyRepo.findById(id).orElse(null);
        return proy;
    }

    @Override
    public void editarProyecto (Proyectos proy) {
        iProyRepo.save(proy);
    }
    
}
