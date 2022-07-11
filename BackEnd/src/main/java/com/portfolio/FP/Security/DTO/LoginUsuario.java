
package com.portfolio.FP.Security.DTO;

import javax.validation.constraints.NotBlank;


public class LoginUsuario {
    
    @NotBlank
    private String nombreUsuario;
    
    @NotBlank
    private String password;
//Getter y Setter
    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public String getPassword() {
        return password;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    
    
}
