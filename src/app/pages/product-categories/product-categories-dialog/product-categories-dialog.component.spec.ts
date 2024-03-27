import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesDialogComponent } from './product-categories-dialog.component';

describe('ProductCategoriesDialogComponent', () => {
  let component: ProductCategoriesDialogComponent;
  let fixture: ComponentFixture<ProductCategoriesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoriesDialogComponent]
    });
    fixture = TestBed.createComponent(ProductCategoriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
