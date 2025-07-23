import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Inventario } from './pages/inventario/inventario';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'inventario', component: Inventario },
  { path: 'inventario', component: Inventario },
];
