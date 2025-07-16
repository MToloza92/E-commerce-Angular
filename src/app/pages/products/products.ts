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
    { id: 1, title: '1984', price: 12990 },
    { id: 2, title: 'Cien años de soledad', price: 15990 },
    { id: 3, title: 'El Principito', price: 8990 }
  ];
}
