
package com.portfolio.FP.Interface;

import com.portfolio.FP.Entity.Empresa;
import java.util.List;


public interface IEmpresaService {
    
    //Traer una lista de empresas
    public List <Empresa> verEmpresa ();
    
    //Crear un objeto de tipo empresa
    public void crearEmpresa (Empresa empre);
    
    //Eliminar una emrpesa por id
    public void borrarEmpresa (Long id);
    
    //Buscar una empresa por id
    public Empresa buscarEmpresa (Long id);
    
    //Editar un objeto de tipo empresa
    public void editarEmpresa (Empresa empre);

    
}
