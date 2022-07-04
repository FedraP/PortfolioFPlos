
package com.portfolio.FP.Service;

import com.portfolio.FP.Entity.Habilidades;
import com.portfolio.FP.Interface.IHabilidadesService;
import com.portfolio.FP.Repository.IHabilidadesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ImpHabilidadesService implements IHabilidadesService{
    
    private final IHabilidadesRepository iHabiRepo;

    @Autowired
    public ImpHabilidadesService(IHabilidadesRepository iHabiRepo) {
        this.iHabiRepo = iHabiRepo;
    }
    
    @Override
    public List<Habilidades> verHabilidades() {
    List<Habilidades> habiList = iHabiRepo.findAll();
        return habiList;
    }

    @Override
    public void crearHabilidad(Habilidades habi) {
        iHabiRepo.save(habi);    
    }

    @Override
    public void borrarHabilidad(Long id) {
        iHabiRepo.deleteById(id);
    }

    @Override
    public Habilidades buscarHabilidad(Long id) {
        Habilidades habi = iHabiRepo.findById(id).orElse(null);
        return habi;
    }

    @Override
    public void editarHabilidad(Habilidades habi) {
        iHabiRepo.save(habi);
    }
    
}
