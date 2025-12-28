import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService, Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false
})
export class DetailPage implements OnInit {
  pokemon: Pokemon | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPokemon(parseInt(id, 10));
    }
  }

  loadPokemon(id: number) {
    this.loading = true;
    
    this.pokemonService.getPokemonById(id).subscribe({
      next: (data: Pokemon) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar Pokémon';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // Formatear altura (decímetros a metros)
  formatHeight(height: number): string {
    return `${(height / 10).toFixed(1)} m`;
  }

  // Formatear peso (hectogramos a kilogramos)
  formatWeight(weight: number): string {
    return `${(weight / 10).toFixed(1)} kg`;
  }

  // Agrega estos métodos a DetailPage:

getTypeColor(typeName: string): string {
  const colors: any = {
    'normal': 'medium',
    'fire': 'danger',
    'water': 'primary',
    'electric': 'warning',
    'grass': 'success',
    'ice': 'tertiary',
    'fighting': 'danger',
    'poison': 'secondary',
    'ground': 'medium',
    'flying': 'light',
    'psychic': 'secondary',
    'bug': 'success',
    'rock': 'medium',
    'ghost': 'dark',
    'dragon': 'primary',
    'dark': 'dark',
    'steel': 'medium',
    'fairy': 'light'
  };
  
  return colors[typeName] || 'primary';
}

getTypesString(): string {
  if (!this.pokemon) return '';
  return this.pokemon.types.map(t => t.type.name).join(', ');
}
}

