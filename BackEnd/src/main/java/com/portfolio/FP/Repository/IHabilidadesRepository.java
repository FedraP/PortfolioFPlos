
package com.portfolio.FP.Repository;

import com.portfolio.FP.Entity.Habilidades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHabilidadesRepository extends JpaRepository <Habilidades,Long> {
    
}
