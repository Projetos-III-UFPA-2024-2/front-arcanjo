import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CurrencyPipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-projeto-detalhe',
  standalone: true,
  imports: [MatProgressBarModule, UpperCasePipe, CurrencyPipe],
  templateUrl: './projeto-detalhe.component.html',
  styleUrl: './projeto-detalhe.component.scss'
})
export class ProjetoDetalheComponent {
  projeto: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = parseInt(idParam, 10); // Converter para número
      this.projeto = this.getProjetoDetalhes(id);
    } else {
      // Lógica para quando o ID não for válido ou for nulo
      console.error('ID do projeto não é válido.');
    }
  }

  getProjetoDetalhes(id: number) {
    // Implemente a lógica para obter os detalhes do projeto pelo ID
  }
}
