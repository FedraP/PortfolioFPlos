
package com.portfolio.FP.Service;

import com.portfolio.FP.Entity.Establecimiento_educativo;
import com.portfolio.FP.Interface.IEstablecimiento_educativoService;
import com.portfolio.FP.Repository.IEstablecimiento_educativoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpEstablecimiento_educativoService implements IEstablecimiento_educativoService {
    
    @Autowired
    public IEstablecimiento_educativoRepository iEstEduRepo;
    
    @Override
    public List<Establecimiento_educativo> verEstablecimientoEdu() {
    List<Establecimiento_educativo> establecimientoEduList = iEstEduRepo.findAll();
        return establecimientoEduList;
    }

    @Override
    public void crearEstablecimientoEdu(Establecimiento_educativo establecimientoEdu) {
        iEstEduRepo.save(establecimientoEdu);    
    }

    @Override
    public void borrarEstablecimientoEdu(Long idEstEdu) {
        iEstEduRepo.deleteById(idEstEdu);
    }

    @Override
    public Establecimiento_educativo buscarEstablecimientoEdu(Long idEstEdu) {
        Establecimiento_educativo establecimientoEdu = iEstEduRepo.findById(idEstEdu).orElse(null);
        return establecimientoEdu;
    }

    @Override
    public void editarEstablecimientoEdu(Establecimiento_educativo establecimientoEdu) {
        iEstEduRepo.save(establecimientoEdu);
    }
}
