import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblComponent } from './tbl.component';

describe('TblComponent', () => {
  let component: TblComponent;
  let fixture: ComponentFixture<TblComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TblComponent]
    });
    fixture = TestBed.createComponent(TblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
