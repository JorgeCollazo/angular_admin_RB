import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Vendor } from '../interfaces/vendor.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vendor-additional-info-dialog',
  templateUrl: './vendor-additional-info-dialog.component.html',
  styleUrls: ['./vendor-additional-info-dialog.component.scss']
})
export class VendorAdditionalInfoDialogComponent implements OnInit, OnDestroy {

  vendor: Vendor;

  constructor(
    public dialogRef: MatDialogRef<VendorAdditionalInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vendor) {
      this.vendor = data;
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
