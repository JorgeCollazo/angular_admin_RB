import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDialogComponent } from './products/product-dialog/product-dialog.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFilteringDialogComponent } from './products/product-filtering-dialog/product-filtering-dialog.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorDialogComponent } from './vendors/vendor-dialog/vendor-dialog.component';



@NgModule({
  declarations: [

    ProductDialogComponent,
    ProductListComponent,
    ProductFilteringDialogComponent,
    VendorListComponent,
    VendorDialogComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
