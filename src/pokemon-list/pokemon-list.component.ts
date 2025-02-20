import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
/*   imports: [PokemonDetailComponent], */
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
public pokemons = [];
private pokemonService = inject(PokemonServiceService);

constructor() {
  this.pokemonService.getPokemonList().subscribe((data) => {
    console.log('data', data);
  })
}
clickName(frase:string) {
  console.log(frase);
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
