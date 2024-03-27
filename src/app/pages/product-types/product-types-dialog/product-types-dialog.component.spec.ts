import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypesDialogComponent } from './product-types-dialog.component';

describe('ProductTypesDialogComponent', () => {
  let component: ProductTypesDialogComponent;
  let fixture: ComponentFixture<ProductTypesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTypesDialogComponent]
    });
    fixture = TestBed.createComponent(ProductTypesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
