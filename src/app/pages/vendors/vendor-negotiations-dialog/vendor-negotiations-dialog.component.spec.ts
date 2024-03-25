import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorNegotiationsDialogComponent } from './vendor-negotiations-dialog.component';

describe('VendorNegotiationsDialogComponent', () => {
  let component: VendorNegotiationsDialogComponent;
  let fixture: ComponentFixture<VendorNegotiationsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorNegotiationsDialogComponent]
    });
    fixture = TestBed.createComponent(VendorNegotiationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
