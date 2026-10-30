import { Component, inject, OnInit, signal } from '@angular/core';
import { RickyService } from '../../services/ricky-service';
import { RickyDetailResponse } from '../../interfaces/ricky-detail-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RickyModal } from '../ricky-modal/ricky-modal';
import { RickyItemComponent } from '../ricky-item-component/ricky-item-component';

@Component({
  imports: [RickyItemComponent],
  selector: 'app-ricky-list-component',
  styleUrl: './ricky-list-component.css',
  templateUrl: './ricky-list-component.html',
})
export class RickyListComponent implements OnInit {

  rickService = inject(RickyService)
  rickList = signal<RickyDetailResponse[]>([])
  private modalService = inject(NgbModal)


// 
  ngOnInit():void{
    this.rickService.getAll().subscribe(resp =>{
      this.rickList.set(resp.results)
    })
  }

  openRickModal(id:number) {

    this.rickService.getOne(String(id)).subscribe(resp => {
      const modalRef = this.modalService.open(RickyModal);
      modalRef.componentInstance.RickyDetailResponse = resp;
    })


}
}
