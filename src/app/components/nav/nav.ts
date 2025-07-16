import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule en componentes "standalone" para que funcione el routerLink

@Component({
 selector: 'app-nav',
  standalone: true,
  imports: [RouterModule], // ← OBLIGATORIO para que funcionen routerLink
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

}
