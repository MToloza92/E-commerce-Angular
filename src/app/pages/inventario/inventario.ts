import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/app/shared/interfaces/productoInterface';
import { TableComponent } from './table.component';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './inventario.html',
  styleUrls: ['./inventario.scss']
})
export class Inventario implements OnInit {
  rol: string = '';
  productos: Producto[] = [];

  ngOnInit(): void {
    const rolGuardado = localStorage.getItem('rolUsuario');
    if (rolGuardado) {
      this.rol = rolGuardado;
    }
  }

  vaciarInventario(): void {
    if (this.rol === 'admin') {
      this.productos = [];
    }
  }
}


