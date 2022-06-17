
package com.portfolio.FP.Repository;

import com.portfolio.FP.Entity.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICursoRepository extends JpaRepository <Curso, Long>{
    
}
