import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimplifiedPokemon } from './Pokemon';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PokeService {
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getData(pokeName: string): Observable<SimplifiedPokemon> {
    return this.http
      .get(`${this.apiUrl}${pokeName}/`)
      .pipe(map((data: any) => new SimplifiedPokemon(data)));
  }
}
