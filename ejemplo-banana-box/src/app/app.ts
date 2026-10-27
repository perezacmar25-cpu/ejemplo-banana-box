import { Component, signal } from '@angular/core';
import { Formulario } from './components/formulario/formulario';

@Component({
  imports: [Formulario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ejemplo-banana-box');
}
