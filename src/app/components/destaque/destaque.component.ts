import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-destaque',
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule, CommonModule],
  templateUrl: './destaque.component.html',
  styleUrl: './destaque.component.scss'
})
export class DestaqueComponent implements OnInit {

  destaqueItems = [
    {
      id: 1,
      image: 'assets/image1.jpg',
      title: 'Tinder de pets',
      subtitle: 'por iPet',
      description: 'Encontre o seu melhor amigo',
      progress: 20,
      amount: 10000,
      daysLeft: 27
    },
    {
      image: 'assets/image1.jpg',
      title: 'RH inteligente',
      subtitle: 'por Debug',
      description: 'O melhor sistema de recrutamento',
      progress: 30,
      amount: 50321,
      daysLeft: 8
    },
    {
      id: 2,
      image: 'assets/image1.jpg',
      title: 'Evite queimadas',
      subtitle: 'por Ecoflight',
      description: 'Brasil sem queimadas',
      progress: 25,
      amount: 80000,
      daysLeft: 32
    }
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {
  }

  irParaDetalhe() {
    this.router.navigate(['/projeto-detalhe']);
  }
}
