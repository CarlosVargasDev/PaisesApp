import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(private activateRoute: ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {
    // Forma 1: 
    this.activateRoute.params.subscribe((params:any)=>{
      console.log(params.id);
      this.paisService.getPaisPorCodigoCCa2(params.id)
          .subscribe((pais:Country[])=>{
            console.log(pais[0]);
            console.log(pais[0].flag);
            this.pais = pais[0];
          });
    })

    //Forma 2: Usando Rxjs
    // this.activateRoute.params
    //     .pipe( switchMap( ({id})=>this.paisService.getPaisPorCodigoCCa2(id) )   )
    //     .subscribe( resp=>console.log );
  }
}
