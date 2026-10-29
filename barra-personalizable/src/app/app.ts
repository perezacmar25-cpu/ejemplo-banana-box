import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomProgressBarComponent } from './Components/custom-progress-bar-component/custom-progress-bar-component';

@Component({
  imports: [RouterOutlet, CustomProgressBarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('barra-personalizable');

}