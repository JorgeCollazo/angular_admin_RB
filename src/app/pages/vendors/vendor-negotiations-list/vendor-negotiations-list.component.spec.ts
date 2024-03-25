import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorNegotiationsListComponent } from './vendor-negotiations-list.component';

describe('VendorNegotiationsListComponent', () => {
  let component: VendorNegotiationsListComponent;
  let fixture: ComponentFixture<VendorNegotiationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorNegotiationsListComponent]
    });
    fixture = TestBed.createComponent(VendorNegotiationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
