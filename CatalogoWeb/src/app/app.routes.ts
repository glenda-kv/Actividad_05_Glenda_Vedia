import { Routes } from '@angular/router';

import { Categorias } from './categorias/categorias';
import { Productos } from './productos/productos';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: Productos },
  { path: 'categorias', component: Categorias },
  { path: '**', redirectTo: 'productos' }
];
