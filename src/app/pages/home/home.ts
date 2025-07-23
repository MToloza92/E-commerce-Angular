import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  title = 'Bienvenido a Proyecto Angular de Toloza';
  mensaje = 'E-commerce en construcción!';
}
