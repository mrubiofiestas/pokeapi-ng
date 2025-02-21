import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonServiceService } from '../pokemon-service.service';
import { JsonPipe } from '@angular/common';
import { PaginatorComponent } from '../paginator/paginator.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, PaginatorComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
/*   changeDetection: ChangeDetectionStrategy.OnPush, */
})
export class PokemonListComponent {
public pokemons: any[] = [];
pages?: any;
private pokemonService = inject(PokemonServiceService);
private router = inject(Router);

constructor() {
  this.pokemonService.getPokemonList().subscribe((data) => {
    this.pages = {next: data.next, previous: data.previous};
    this.pokemons = data.results;
    //console.log('data', data.results);
  })
}
clickName(pokemon:string) {
  this.router.navigate(['/pokemon', pokemon]);
}

nextPage() {
  if (this.pages.next) {
    this.pokemonService.changePage(this.pages.next).subscribe((data) => {
      this.pages = {next: data.next, previous: data.previous};
      this.pokemons = data.results;
    })
  }
  //console.log('siguiente pagina');
}
prevPage() {
  if(this.pages.previous) {
    this.pokemonService.changePage(this.pages.previous).subscribe((data) => {
      this.pages = {next: data.next, previous: data.previous};
      this.pokemons = data.results;
    })
  }
  
  //console.log('pagina anterior');
}
  /* {
    name: 'Pikachu', 
    src: 'https://www.teleadhesivo.com/es/img/pokgo05-png/folder/products-detalle-png/vinilos-infantiles-pikachu.png',
    habilities: ['Electrico']
  },
  {
    name: 'Charmander',
    src: 'https://pokemon-project.com/pokedex/img/sprite/Home/256/4.png',
    habilities: ['Fuego']
  },
  {
    name: 'Squirtle', 
    src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e3/latest/20160309230820/Squirtle.png/800px-Squirtle.png',
    habilities: ['Agua']
  },
];

clickName(frase: string) {
    console.log(frase);
  } */
}
