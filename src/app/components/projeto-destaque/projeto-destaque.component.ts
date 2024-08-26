import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-projeto-destaque',
  standalone: true,
  imports: [],
  templateUrl: './projeto-destaque.component.html',
  styleUrl: './projeto-destaque.component.scss'
})
export class ProjetoDestaqueComponent {
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() description: string = '';
  @Input() progress: number = 0;
  @Input() raised: number = 0;
  @Input() daysLeft: number = 0;
  @Input() location: string = '';
  @Input() category: string = '';
  @Input() imageUrl: string = '';
}
