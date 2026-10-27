import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { Producto } from '../models/producto.model';
import { ProductoService } from '../services/producto.service';
import { PrecioPipe } from '../precio-pipe';
import { StockBajo } from '../stock-bajo';
import { EstadoPipe } from '../estado-pipe';

@Component({
  selector: 'app-productos',
  imports: [
    PrecioPipe,
    EstadoPipe,
    StockBajo
  ],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  private readonly productoService = inject(ProductoService);

  readonly productos = signal<Producto[]>([]);
  readonly cargando = signal(false);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando.set(true);
    this.error.set(null);

    this.productoService.obtenerTodos()
      .pipe(
        finalize(() => this.cargando.set(false))
      )
      .subscribe({
        next: (datos) => {
          this.productos.set(datos);
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
