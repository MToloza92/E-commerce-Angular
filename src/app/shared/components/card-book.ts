import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-book',
  standalone: true,
  templateUrl: './card-book.html',
  styleUrl: './card-book.scss'
})
export class CardBook {
  @Input() book!: any;

  // Evento para notificar al padre
  @Output() seleccionar = new EventEmitter<number>();

  // Método para emitir el evento
  notificarSeleccion() {
    this.seleccionar.emit(this.book.id);
  }
}
