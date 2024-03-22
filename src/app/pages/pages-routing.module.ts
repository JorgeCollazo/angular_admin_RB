import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: 'products-list', component: ProductListComponent },
  { path: 'vendor-list', component: VendorListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
