import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule en componentes "standalone" para que funcione el routerLink
import { NgIf } from '@angular/common'; // --standalone, todo lo que uses (pipes, directivas, etc.) debe ser importado explícitamente.

@Component({
 selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, NgIf], // ← RouterModule para que funcionen routerLink
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  mostrarOpciones = false;

   constructor(private router: Router) {}

  toggleOpciones(): void {
    this.mostrarOpciones = !this.mostrarOpciones;
  }
    guardarRol(rol: string): void {
    localStorage.setItem('rolUsuario', rol);
    this.router.navigate(['/inventario']);
    this.mostrarOpciones = false; // Cierra el panel después de seleccionar
  }
}
