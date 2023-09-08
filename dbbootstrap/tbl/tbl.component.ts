import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
} from '@angular/core';
import { Subject, from, map } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-tbl',
  templateUrl: './tbl.component.html',
  styleUrls: ['./tbl.component.scss'],
})
export class TblComponent {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: any = new Subject();
  @Input() options: any;
  title = 'component_test';
  constructor() {}

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  ngOnInit(): void {
    let that = this;
    this.dtOptions = this.options;
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
