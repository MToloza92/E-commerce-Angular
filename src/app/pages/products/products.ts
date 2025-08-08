import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../../shared/components/modal-confirm/modal-confirm.component';
import { MatCardModule } from '@angular/material/card';
import { CardBook } from '../../shared/components/card-book';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardBook, MatCardModule, MatDialogModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class ProductsComponent {

  constructor(private dialog: MatDialog) { }

  // Función para abrir el modal de confirmación
  abrirModal() {
    this.dialog.open(ModalConfirmComponent, {

      data: {
        mensaje: 'Profe no tuve mas tiempo',
        btnNombre: 'Perdonar'
      }
    });
  }

  //  Lista de libros
  books = [
    {
      id: 1,
      title: 'Caminos del Alma',
      price: 7990,
      cover: '/assets/covers/alma.jpg',
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

  //  Mostrar detalles de un libro
  showDetails(bookId: number) {
    this.selectedBook = this.books.find(b => b.id === bookId);
  }

  //  Cerrar detalles
  closeDetails() {
    this.selectedBook = null;
  }
}
