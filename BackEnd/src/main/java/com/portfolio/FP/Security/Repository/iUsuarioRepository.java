package com.portfolio.FP.Security.Repository;

import com.portfolio.FP.Security.Entity.Usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iUsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByNombreUsuario(String nombreUsusario);

    boolean existsByNombreUsuario(String nombreUsuario);
    boolean existsByEmail (String email);
}

