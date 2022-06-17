
package com.portfolio.FP.Repository;

import com.portfolio.FP.Entity.Establecimiento_educativo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEstablecimiento_educativoRepository extends JpaRepository<Establecimiento_educativo, Long>{ 
    
}
