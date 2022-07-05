
package com.portfolio.FP.Repository;

import com.portfolio.FP.Entity.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEmpresaRepository extends JpaRepository <Empresa, Long>{
    
}
