
package com.portfolio.FP.Security.Service;

import com.portfolio.FP.Security.Entity.Usuario;
import com.portfolio.FP.Security.Repository.iUsuarioRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UsuarioService {
    
    @Autowired
    iUsuarioRepository iusuarioRepsitory;
    
    public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
        return iusuarioRepsitory.findByNombreUsuario(nombreUsuario);
    }
    
    public boolean existsByNombreUsuario (String nombreUsuario){
        return iusuarioRepsitory.existsByNombreUsuario(nombreUsuario);
    }
    
     public boolean existsByEmail (String email){
        return iusuarioRepsitory.existsByEmail(email);
    }
     
     public void save(Usuario usuario){
         iusuarioRepsitory.save(usuario);
     }
}
