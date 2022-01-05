import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = "https://restcountries.com/v3.1";

  buscarPais(terminoBusqueda: string):Observable<any>{
    const url = `${this.apiUrl}/name/${terminoBusqueda}`;
    return this.httpClient.get(url);

  }


  constructor(private httpClient:HttpClient) {
    
  }
}
