import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = "https://restcountries.com/v3.1";

  buscarPais(terminoBusqueda: string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${terminoBusqueda}`;
    return this.httpClient.get<Country[]>(url);
  }

  buscarPaisPorCapital(terminoBusqueda: string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${terminoBusqueda}`;
    return this.httpClient.get<Country[]>(url);
  }
  getPaisPorCodigoCCa2(terminoBusqueda: string):Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${terminoBusqueda}`;
    return this.httpClient.get<Country[]>(url);
  }


  constructor(private httpClient:HttpClient) {
    
  }
}
