import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TblComponent } from './tbl/tbl.component';
import { DataTablesModule } from 'angular-datatables';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [TblComponent, CardComponent, ModalComponent],
  imports: [CommonModule, DataTablesModule],
  exports: [TblComponent, CardComponent, ModalComponent],
})
export class DbbootstrapModule {}
