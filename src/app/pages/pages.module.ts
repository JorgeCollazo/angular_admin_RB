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
import { VendorNegotiationsListComponent } from './vendors/vendor-negotiations-list/vendor-negotiations-list.component';
import { VendorNegotiationsDialogComponent } from './vendors/vendor-negotiations-dialog/vendor-negotiations-dialog.component';
import { VendorAdditionalInfoDialogComponent } from './vendors/vendor-additional-info-dialog/vendor-additional-info-dialog.component';
import { ProductTypesListComponent } from './product-types/product-types-list/product-types-list.component';
import { ProductTypesDialogComponent } from './product-types/product-types-dialog/product-types-dialog.component';
import { ProductCategoriesListComponent } from './product-categories/product-categories-list/product-categories-list.component';
import { ProductCategoriesDialogComponent } from './product-categories/product-categories-dialog/product-categories-dialog.component';
import { BrandsListComponent } from './brands/brands-list/brands-list.component';
import { BrandsDialogComponent } from './brands/brands-dialog/brands-dialog.component';



@NgModule({
  declarations: [
    ProductDialogComponent,
    ProductListComponent,
    ProductFilteringDialogComponent,
    VendorListComponent,
    VendorDialogComponent,
    VendorNegotiationsListComponent,
    VendorNegotiationsDialogComponent,
    VendorAdditionalInfoDialogComponent,
    ProductTypesListComponent,
    ProductTypesDialogComponent,
    ProductCategoriesListComponent,
    ProductCategoriesDialogComponent,
    BrandsListComponent,
    BrandsDialogComponent
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
