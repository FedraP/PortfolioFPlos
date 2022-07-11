
package com.portfolio.FP.Security.Repository;

import com.portfolio.FP.Security.Entity.Rol;
import com.portfolio.FP.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Long>{
    Optional<Rol> findByRolNombre (RolNombre rol);
    
}
