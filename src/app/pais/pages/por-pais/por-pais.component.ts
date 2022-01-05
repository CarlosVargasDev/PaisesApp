import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  public terminoBusqueda:string = "";
  public errorRespuesta: boolean = false; 
  public lista_paises: Country[] = [];

  buscar(evento:any){
    this.errorRespuesta = false;

    this.paisService.buscarPais(this.terminoBusqueda)
      .subscribe((paises:Country[])=>{
        console.log(paises);
        this.lista_paises = paises;
      }, (err)=>{
        this.errorRespuesta = true;
        this.lista_paises = [];
      });
  }

  
  constructor(private paisService:PaisService){

  }

  

}
