import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorNegotiationsListComponent } from './vendors/vendor-negotiations-list/vendor-negotiations-list.component';
import { ProductTypesListComponent } from './product-types/product-types-list/product-types-list.component';
import { BrandsListComponent } from './brands/brands-list/brands-list.component';
import { ProductCategoriesListComponent } from './product-categories/product-categories-list/product-categories-list.component';

const routes: Routes = [
  { path: 'products-list', component: ProductListComponent },
  { path: 'products-types-list', component: ProductTypesListComponent },
  { path: 'products-categories-list', component: ProductCategoriesListComponent },
  { path: 'brands-list', component: BrandsListComponent },
  { path: 'vendor-list', component: VendorListComponent },
  { path: 'vendor-negotiations-list', component: VendorNegotiationsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
