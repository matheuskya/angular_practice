import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Home, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_practice');
}
