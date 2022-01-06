import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params:any)=>{
      console.log(params.id);
      this.paisService.getPaisPorCodigoCCa2(params.id)
          .subscribe((pais:Country)=>{
            console.log(pais);
          });
    })
  }

}
