import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDataDialogComponent } from './vendor-data-dialog.component';

describe('VendorDataDialogComponent', () => {
  let component: VendorDataDialogComponent;
  let fixture: ComponentFixture<VendorDataDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorDataDialogComponent]
    });
    fixture = TestBed.createComponent(VendorDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
