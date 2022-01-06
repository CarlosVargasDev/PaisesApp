import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-buscador',
  templateUrl: './pais-buscador.component.html',
  styles: [
  ]
})
export class PaisBuscadorComponent implements OnInit{
  @Input() placeholder:string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  public terminoBusqueda:string = "";

  buscar(){ // Se activa cuando precionamos enter.(Cuando se activa el evento NgSubmit)
    this.onEnter.emit(this.terminoBusqueda); 
  }
  teclaPresionada(){
    this.debouncer.next(this.terminoBusqueda);
  }

  ngOnInit(): void {
    this.debouncer
        .pipe(debounceTime(300)) //Especificamos cuantoas milesimasi de segundo esperar antes de emitir otro valor
        .subscribe(valor => { //el valor, es el valor del input del formulario
          this.onDebounce.emit(valor);
          // console.log('debouncer', valor);
    });

  }
}
