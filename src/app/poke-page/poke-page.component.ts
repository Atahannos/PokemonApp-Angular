import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokeService } from '../poke.service';
import { SimplifiedPokemon } from '../Pokemon';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-poke-page',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './poke-page.component.html',
  styleUrl: './poke-page.component.scss',
})
export class PokePageComponent {
  PokeData: SimplifiedPokemon;

  constructor(private pokeservice: PokeService) {}

  searchPoke(pokeName: string) {
    this.pokeservice.getData(pokeName).subscribe((data: SimplifiedPokemon) => {
      this.PokeData = data;
      console.log(this.PokeData);
    });
  }
}
