import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Input() closeButtonLabel: string;
  @Input() confirmButtonLabel: string;

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(event: Event): void {
    this.onClose.emit(event);
  }

  confirm(event: Event): void {
    this.onConfirm.emit(event);
  }

}
