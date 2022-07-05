
package com.portfolio.FP.Service;

import com.portfolio.FP.Entity.Redes;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.portfolio.FP.Interface.IRedesService;
import com.portfolio.FP.Repository.IRedesRepository;

@Service
@Transactional
public class ImpRedesService implements IRedesService {
    
    private final IRedesRepository iRedRepo;

    @Autowired
    public ImpRedesService(IRedesRepository iRedRepo) {
        this.iRedRepo = iRedRepo;
    }
    
    @Override
    public List<Redes> verRedS() {
    List<Redes> redSList = iRedRepo.findAll();
        return redSList;
    }

    @Override
    public void crearRedS(Redes redS) {
        iRedRepo.save(redS);    
    }

    @Override
    public void borrarRedS(Long id) {
        iRedRepo.deleteById(id);
    }

    @Override
    public Redes buscarRedS (Long id) {
        Redes redS = iRedRepo.findById(id).orElse(null);
        return redS;
    }

    @Override
    public void editarRedS (Redes redS){
        iRedRepo.save(redS);
    }
    
}
