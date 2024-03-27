import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAdditionalInfoDialogComponent } from './vendor-additional-info-dialog.component';

describe('VendorAdditionalInfoDialogComponent', () => {
  let component: VendorAdditionalInfoDialogComponent;
  let fixture: ComponentFixture<VendorAdditionalInfoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorAdditionalInfoDialogComponent]
    });
    fixture = TestBed.createComponent(VendorAdditionalInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
