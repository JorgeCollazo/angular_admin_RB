import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PagesService } from '../../pages.service';
import { ToastrService } from 'ngx-toastr';
import { ProductType } from '../interfaces/product-type.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-types-dialog',
  templateUrl: './product-types-dialog.component.html',
  styleUrls: ['./product-types-dialog.component.scss']
})
export class ProductTypesDialogComponent implements OnInit, OnDestroy {

  productDialogForm!: FormGroup;
  disableClose: boolean = false;
  userID: number;
  isSelectDisabled: boolean = true;
  getLicenses$: Subscription = new Subscription();
  getServices$: Subscription = new Subscription();
  getDevices$: Subscription = new Subscription();
  editProduct$: Subscription = new Subscription();
  isEditing : boolean;
  arrServicesIDs: number[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProductTypesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductType,
    private fb: FormBuilder,
    private pagesService: PagesService,
    private toastr: ToastrService
  ) {

    this.isEditing = !!data

    this.userID = Number(localStorage.getItem('_userID'));
    this.productDialogForm = fb.group({
      description: [data ? data.description : ''],
      price_perc: [data ? data.price_perc : 0],
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
   
  }

  onSaveClick(): void {

  }

  editProduct() {

  }

  close() {
    this.dialogRef.close({isRefreshing: false});
  }
}


