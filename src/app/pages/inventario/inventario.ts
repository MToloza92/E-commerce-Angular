import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/app/interfaces/productoInterface';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule],
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

    // Inicializar productos
    this.productos = [
      { nombre: 'Caminos del Alma', cantidad: 12 },
      { nombre: 'Cruce de Caminos', cantidad: 5 },
      { nombre: 'Caminos Encontrados', cantidad: 8 },
      { nombre: 'Al Final del Camino', cantidad: 3},
      
    ];
  }

  vaciarInventario(): void {
    if (this.rol === 'admin') {
      this.productos = [];
    }
  }
}


