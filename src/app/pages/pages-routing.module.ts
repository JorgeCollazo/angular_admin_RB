import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorNegotiationsListComponent } from './vendors/vendor-negotiations-list/vendor-negotiations-list.component';

const routes: Routes = [
  { path: 'products-list', component: ProductListComponent },
  { path: 'vendor-list', component: VendorListComponent },
  { path: 'vendor-negotiations-list', component: VendorNegotiationsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
