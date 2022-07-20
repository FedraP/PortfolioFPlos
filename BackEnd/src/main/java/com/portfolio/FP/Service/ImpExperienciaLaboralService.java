
package com.portfolio.FP.Service;

import com.portfolio.FP.Entity.ExperienciaLaboral;
import com.portfolio.FP.Interface.IExperienciaLaboralService;
import com.portfolio.FP.Repository.IExperienciaLaboralRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ImpExperienciaLaboralService implements IExperienciaLaboralService {
    
    private final IExperienciaLaboralRepository iExpeRepo;

    @Autowired
    public ImpExperienciaLaboralService(IExperienciaLaboralRepository iExpeRepo) {
        this.iExpeRepo = iExpeRepo;
    }
    
    @Override
    public List <ExperienciaLaboral> verExperiencia() {
    List<ExperienciaLaboral> expeList = iExpeRepo.findAll();
        return expeList;
    }
    
    @Override
     public void crearExperiencia (ExperienciaLaboral experiencia) {
        iExpeRepo.save(experiencia);    
    }

    @Override
     public void borrarExperiencia (Long id) {
        iExpeRepo.deleteById(id);
    }

    @Override
     public ExperienciaLaboral buscarExperiencia (Long id) {
        ExperienciaLaboral expe = iExpeRepo.findById(id).orElse(null);
        return expe;
    }

    @Override
    public void editarExperiencia (ExperienciaLaboral experiencia){
        iExpeRepo.save(experiencia);
    }
    
    @Override
    public boolean existePorId(Long id){
        return iExpeRepo.existsById(id);
    }
    
}
