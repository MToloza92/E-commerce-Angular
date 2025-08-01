// src/app/layout/layout.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
