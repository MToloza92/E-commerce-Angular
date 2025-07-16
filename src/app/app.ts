import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer, Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Toloza';
}

