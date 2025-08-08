import { Producto } from '../interfaces/productoInterface';

export const PRODUCTOS_MOCK: Producto[] = [
  {
    id: 1,
    nombre: 'Caminos del Alma',
    precio: 7990,
    cantidad: 15,
    categoria: 'Libros',
    fechaIngreso: new Date('2025-01-15')
  },
  {
    id: 2,
    nombre: 'Caminos Encontrados',
    precio: 8990,
    cantidad: 8,
    categoria: 'Libros',
    fechaIngreso: new Date('2025-02-01')
  },
  {
    id: 3,
    nombre: 'Cruce de Caminos',
    precio: 9990,
    cantidad: 12,
    categoria: 'Libros',
    fechaIngreso: new Date('2025-02-10')
  },
  {
    id: 4,
    nombre: 'Al Final del Camino',
    precio: 99990,
    cantidad: 2,
    categoria: 'Edición Especial',
    fechaIngreso: new Date('2025-03-01')
  }
];
