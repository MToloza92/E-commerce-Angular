
import { Routes } from '@angular/router';
import { Layout } from './layout';
import { Home } from '../pages/home/home';
import { Products } from '../pages/products/products';
import { Inventario } from '../pages/inventario/inventario';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: Layout, // <-- Layout principal
    children: [
      { path: '', component: Home },
      { path: 'products', component: Products },
      { path: 'inventario', component: Inventario },
    ],
  },
];
