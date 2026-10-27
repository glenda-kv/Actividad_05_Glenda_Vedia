import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria.model';

@Component({
  selector: 'app-categorias',
  imports: [],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias implements OnInit {
    private readonly categoriaService = inject(CategoriaService);

    readonly categorias = signal<Categoria[]>([]);
    readonly cargando = signal(false);
    readonly error = signal<string | null>(null);

    ngOnInit(): void {
      this.cargarCategorias();
    }

    cargarCategorias(): void {
      this.cargando.set(true);
      this.error.set(null);

      this.categoriaService.obtenerTodos()
        .pipe(
          finalize(() => this.cargando.set(false))
        )
        .subscribe({
          next: (datos) => {
            this.categorias.set(datos);
          },
          error: (err: HttpErrorResponse) => {
            this.error.set(
              err.status === 0
                ? 'No se pudo conectar con el backend.'
                : `Ocurrió un error HTTP ${err.status}.`
            );
          }
        });
  }
}