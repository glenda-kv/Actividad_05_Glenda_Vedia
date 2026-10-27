import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../core/config/api.config';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private readonly http = inject(HttpClient);

  private readonly url = `${API_CONFIG.baseURL}/categorias`;

  obtenerTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }
}