import { Component, OnInit } from '@angular/core';
import { PokemonService, Pokemon, PokemonListResponse } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  pokemonList: any[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.loading = true;
    
    this.pokemonService.getPokemonList().subscribe({
      next: (response: PokemonListResponse) => {
        this.pokemonList = response.results;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar Pokémon';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // Extraer ID de URL para navegación
  getPokemonId(url: string): number {
    return this.pokemonService.extractIdFromUrl(url);
  }
}