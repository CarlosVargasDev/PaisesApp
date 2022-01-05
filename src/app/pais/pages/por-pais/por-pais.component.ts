import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  public terminoBusqueda:string = "";

  buscar(evento:any){
    console.log(this.terminoBusqueda);

  }

  


  

}
