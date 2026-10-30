import { Component, input, output } from '@angular/core';
import { RickyDetailResponse } from '../../interfaces/ricky-detail-response';

@Component({
  imports: [],
  selector: 'app-ricky-item-component',
  styleUrl: './ricky-item-component.css',
  templateUrl: './ricky-item-component.html',
})
export class RickyItemComponent {


  rick = input<RickyDetailResponse>();
  rickClicked = output<number>();

  emitRickClicked() {
const id = this.rick()?.id;
if (id !== undefined) {
  this.rickClicked.emit(id);
}
}


}
