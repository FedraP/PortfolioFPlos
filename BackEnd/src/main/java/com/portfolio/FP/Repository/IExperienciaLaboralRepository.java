
package com.portfolio.FP.Repository;

import com.portfolio.FP.Entity.ExperienciaLaboral;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IExperienciaLaboralRepository extends JpaRepository <ExperienciaLaboral, Long>{
    
    
}
