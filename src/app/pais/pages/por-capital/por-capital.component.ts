import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public terminoBusqueda:string = "";
  public errorRespuesta: boolean = false; 
  public lista_paises: Country[] = [];

  buscar(termino:string){
    this.errorRespuesta = false;
    this.terminoBusqueda = termino;

    this.paisService.buscarPaisPorCapital(this.terminoBusqueda)
      .subscribe((paises:Country[])=>{
        console.log(paises);
        this.lista_paises = paises;
      }, (err)=>{
        this.errorRespuesta = true;
        this.lista_paises = [];
      });
  }

  sugerencias(termino: string){
    this.errorRespuesta = false;
    //TODO: crear sugerencias
  }

  constructor(private paisService:PaisService){
  }
}
