import { Component, Input } from '@angular/core';

interface db_obj {
  title: string;
  id: string;
  class: string;
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() config: db_obj = {
    title: '',
    id: '',
    class: '',
  };
}
