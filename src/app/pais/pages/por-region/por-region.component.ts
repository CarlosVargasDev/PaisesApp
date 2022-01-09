import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{ margin-right: 5px;}
  `
  ]
})
export class PorRegionComponent{
  regiones: string [] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = '';
  listaPaises: Country[] = [];
  errorRespuesta: boolean = false;

  getClasesCssRegion(region:string){
    return (region === this.regionActiva)?  'btn-primary': 'btn-outline-primary';
    
  }

  activarRegion(region:string){
    if(this.regionActiva === region){ return; }

    this.regionActiva = region;
    this.paisService.getPaisPorRegion(this.regionActiva)
      .subscribe( (paises: Country[])=>{
        this.listaPaises = paises;
      }, (err) =>{ this.listaPaises = [];  });
  }

  constructor(private paisService: PaisService) { }

}
