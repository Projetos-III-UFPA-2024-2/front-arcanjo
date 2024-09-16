import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items: { image: string, title: string, description: string }[] = [];
  currentIndex = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateCarousel(); // Inicializa a posição do carrossel
  }

  prevSlide() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.items.length - 1;
    } else {
      this.currentIndex--;
    }
    this.updateCarousel();
  }

  nextSlide() {
    if (this.currentIndex === this.items.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateCarousel();
  }

  updateCarousel() {
    const carousel = this.el.nativeElement.querySelector('.carousel') as HTMLElement;
    if (carousel) {
      const width = carousel.clientWidth;
      this.renderer.setStyle(carousel, 'transform', `translateX(-${this.currentIndex * width}px)`);
    }
  }

  onButtonClick(item: any) {
    console.log('Projeto:', item);
  }
}
