import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-custom-progress-bar-component',
  styleUrl: './custom-progress-bar-component.css',
  templateUrl: './custom-progress-bar-component.html',
})
export class CustomProgressBarComponent {

    value:number = 0


    get colorForm() {
      if (this.value < 40) 
        return 'danger'

      if (this.value < 80)
        return 'warning'
      return 'success'
  }
}
