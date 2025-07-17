import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  books = [
    { 
      id: 1, 
      title: 'Caminos del Alma', 
      price: 7990,
      cover: '/assets/covers/alma.jpg',  // Ruta relativa a tu carpeta de assets
      description: 'Comienzo de la trilogía de Caminos',
      author: 'El mismisimo',
    pages: 328
    },
    { 
      id: 2, 
      title: 'Caminos Encontrados', 
      price: 8990,
      cover: '/assets/covers/encontrado.jpg',
      description: 'Mas camino que nunca',
      author: 'El mismisimo',
      pages: 328
    },
    { 
      id: 3, 
      title: 'Cruce de Caminos', 
      price: 9990,
      cover: '/assets/covers/cruce.jpg',
      description: 'La venganza del camino',
      author: 'El mismisimo',
      pages: 328
    },
    { 
      id: 4, 
      title: 'Al final del Camino', 
      price: 99990,
      cover: '/assets/covers/final.jpg',
      description: 'Camino: Endwalk',
      author: 'El mismisimo',
      pages: 328
    }
  ];
  selectedBook: any = null;

  // Mostrar detalles del libro
    showDetails(bookId: number) {
    this.selectedBook = this.books.find(b => b.id === bookId);
  }
  
  // Cerrar detalles
  closeDetails() {
    this.selectedBook = null;
  }
}   