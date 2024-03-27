import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsDialogComponent } from './brands-dialog.component';

describe('BrandsDialogComponent', () => {
  let component: BrandsDialogComponent;
  let fixture: ComponentFixture<BrandsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsDialogComponent]
    });
    fixture = TestBed.createComponent(BrandsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
