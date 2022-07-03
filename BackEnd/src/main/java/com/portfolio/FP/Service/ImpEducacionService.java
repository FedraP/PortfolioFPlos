
package com.portfolio.FP.Service;

import com.portfolio.FP.Entity.Educacion;
import com.portfolio.FP.Interface.IEducacionService;
import com.portfolio.FP.Repository.IEducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ImpEducacionService implements IEducacionService{
    
     private final IEducacionRepository iEduRepo;
     
    @Autowired
     public ImpEducacionService(IEducacionRepository iEduRepo) {
        this.iEduRepo = iEduRepo;
    }
    
    @Override
    public List <Educacion> verEducacion() {
    List <Educacion> eduList = iEduRepo.findAll();
        return eduList;
    }
    

    @Override
    public void crearEducacion(Educacion edu) {
        iEduRepo.save(edu);    
    }

    @Override
    public void borrarEducacion(Long idEdu) {
        iEduRepo.deleteById(idEdu);
    }

    @Override
    public Educacion buscarEducacion(Long idEdu) {
        Educacion edu = iEduRepo.findById(idEdu).orElse(null);
        return edu;
    }

    @Override
    public void editarEducacion(Educacion edu) {
        iEduRepo.save(edu);
    }
    
}