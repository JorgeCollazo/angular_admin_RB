import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilteringDialogComponent } from './product-filtering-dialog.component';

describe('ProductFilteringListComponent', () => {
  let component: ProductFilteringDialogComponent;
  let fixture: ComponentFixture<ProductFilteringDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFilteringDialogComponent]
    });
    fixture = TestBed.createComponent(ProductFilteringDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
