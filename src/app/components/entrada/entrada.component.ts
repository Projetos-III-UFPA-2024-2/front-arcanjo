import { Component } from '@angular/core';
import {ProjetoDestaqueComponent} from "../projeto-destaque/projeto-destaque.component";
import {CarouselComponent} from "../../carousel/carousel.component";

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [ProjetoDestaqueComponent, CarouselComponent],
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.scss'
})
export class EntradaComponent {

  carouselItems = [
    {
      image: 'assets/image1.jpg',
      title: 'Título 1',
      description: 'Descrição 1'
    },
    {
      image: 'assets/image2.jpg',
      title: 'Título 2',
      description: 'Descrição 2'
    },
  ];

}
