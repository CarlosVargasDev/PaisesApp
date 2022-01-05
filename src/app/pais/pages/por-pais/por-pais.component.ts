import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  public terminoBusqueda:string = "";
  public errorRespuesta: boolean = false; 

  buscar(evento:any){
    this.errorRespuesta = false;
    console.log(this.terminoBusqueda);
    this.paisService.buscarPais(this.terminoBusqueda)
      .subscribe((resp)=>{
        console.log(resp);
      }, (err)=>{
        this.errorRespuesta = true;
      });
  }

  
  constructor(private paisService:PaisService){

  }

  

}
