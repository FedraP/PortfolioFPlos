
package com.portfolio.FP.Service;

import com.portfolio.FP.Entity.Empresa;
import com.portfolio.FP.Interface.IEmpresaService;
import com.portfolio.FP.Repository.IEmpresaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ImpEmpresaService implements IEmpresaService {
    
    private final IEmpresaRepository iEmpreRepo;

    @Autowired
    public ImpEmpresaService(IEmpresaRepository iEmpreRepo) {
        this.iEmpreRepo = iEmpreRepo;
    }
    
    @Override
    public List<Empresa> verEmpresa() {
    List<Empresa> empresaList = iEmpreRepo.findAll();
        return empresaList;
    }

    @Override
    public void crearEmpresa(Empresa empre) {
        iEmpreRepo.save(empre);    
    }

    @Override
    public void borrarEmpresa(Long id) {
        iEmpreRepo.deleteById(id);
    }

    @Override
    public Empresa buscarEmpresa (Long id) {
        Empresa empre = iEmpreRepo.findById(id).orElse(null);
        return empre;
    }

    @Override
    public void editarEmpresa (Empresa empre){
        iEmpreRepo.save(empre);
    }
    
    
}
