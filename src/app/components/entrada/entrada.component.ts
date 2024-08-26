import { Component } from '@angular/core';
import {ProjetoDestaqueComponent} from "../projeto-destaque/projeto-destaque.component";

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [ProjetoDestaqueComponent],
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.scss'
})
export class EntradaComponent {

  projetos = [
    {
      title: 'PAREIA',
      author: 'Sapo Lendário',
      description: '✯ LA-URSA-DEMÔNIO + AMIGADA = PAREIA ✯',
      progress: 39,
      raised: 35870,
      daysLeft: 9,
      location: 'Caruaru, PE',
      category: 'Quadrinhos',
      imageUrl: 'assets/images/projeto1.jpg'
    },
    {
      title: 'Os Melhores Contos de Fadas Eslavos',
      author: 'Editora Wish',
      description: 'Uma encantadora edição ilustrada com histórias antigas, clássicas e raras!',
      progress: 151,
      raised: 268035,
      daysLeft: 43,
      location: 'São Paulo, SP',
      category: 'Literatura',
      imageUrl: 'assets/images/projeto2.jpg'
    },
    {
      title: 'Wilderfeast RPG',
      author: 'CapyCat Games',
      description: 'Um RPG sobre monstros, caça e culinária! Siga a Lei Una da Terra Una: VOCÊ É O QUE VOCÊ COME!',
      progress: 90,
      raised: 90925,
      daysLeft: 25,
      location: 'São Paulo, SP',
      category: 'Jogos',
      imageUrl: 'assets/images/projeto3.jpg'
    }
  ];

}
