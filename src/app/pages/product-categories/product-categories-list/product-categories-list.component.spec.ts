import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesListComponent } from './product-categories-list.component';

describe('ProductCategoriesListComponent', () => {
  let component: ProductCategoriesListComponent;
  let fixture: ComponentFixture<ProductCategoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoriesListComponent]
    });
    fixture = TestBed.createComponent(ProductCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
