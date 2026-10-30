import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RickyDetailResponse } from '../../interfaces/ricky-detail-response';

@Component({
  imports: [],
  selector: 'app-ricky-modal',
  styleUrl: './ricky-modal.css',
  templateUrl: './ricky-modal.html',
})
export class RickyModal {
  activeModal = inject(NgbActiveModal);

  @Input() rickDetails : RickyDetailResponse | undefined;
}
