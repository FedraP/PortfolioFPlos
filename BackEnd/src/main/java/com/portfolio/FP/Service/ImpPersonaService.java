
package com.portfolio.FP.Service;

import com.portfolio.FP.Entity.Persona;
import com.portfolio.FP.Interface.IPersonaService;
import com.portfolio.FP.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ImpPersonaService implements IPersonaService {

    private final IPersonaRepository iPersoRepo;

    @Autowired
    public ImpPersonaService(IPersonaRepository iPersoRepo) {
        this.iPersoRepo = iPersoRepo;
    }
    
    //@Autowired
    //public IPersonaRepository iPersoRepo;
    
    @Override
    public List<Persona> verPersonas() {
    List<Persona> persoList = iPersoRepo.findAll();
        return persoList;
    }

    @Override
    public void crearPersona(Persona perso) {
        iPersoRepo.save(perso);    
    }

    @Override
    public void borrarPersona(Long id) {
        iPersoRepo.deleteById(id);
    }

    @Override
    public Persona buscarPersona(Long id) {
        Persona perso = iPersoRepo.findById(id).orElse(null);
        return perso;
    }

    @Override
    public void editarPersona(Persona perso) {
        iPersoRepo.save(perso);
    }
    
}
